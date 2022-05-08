/**
 * @jest-environment jsdom
 */

// テストファイルの上部にこれやれば良いっぽい。
// React Testing Library のexmapleには@testing-library/jest-domをinstallする方法も載っていた。
// 依存先は最小限にしたい&React Testing LibraryのexampleにはJest27ならこっちでも良いって書いてあった。
// から、jestの環境を変えるだけで良い上記を使用する。
// ref: https://jestjs.io/docs/configuration#testenvironment-string

import axios from 'axios';
import {testDbTodos} from '../../../__test__/todos/testData';
import {renderHook, waitFor} from '@testing-library/react';
import {useFetchTodos} from './useFetchTodos';

describe('useFetchTodos', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('todoの取得に成功したら、todoが2個取得できる', async () => {
    const response = {data: testDbTodos};
    const spyAxiosGet = jest.spyOn(axios, 'get').mockResolvedValue(response);

    const {result} = renderHook(() => useFetchTodos());
    await waitFor(() => expect(spyAxiosGet).toHaveBeenCalled());
    await waitFor(() => expect(result.current.todos.length).toBe(2));
  });

  it('todoの取得に失敗したら、todoが0個取得できる', async () => {
    const spyAxiosGet = jest.spyOn(axios, 'get').mockRejectedValue(() => {
      throw new Error();
    });
    const {result} = renderHook(() => useFetchTodos());
    await waitFor(() => expect(spyAxiosGet).toHaveBeenCalled());
    await waitFor(() => expect(result.current.todos.length).toBe(0));
  });
});
