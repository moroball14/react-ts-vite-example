/**
 * @jest-environment jsdom
 */

// React関連のテストファイルの上部にはこれやれば良いっぽい。
// ref: https://jestjs.io/docs/configuration#testenvironment-string

import {testApplicationTodos} from '../../../__test__/todos/testData';
import {renderHook, waitFor} from '@testing-library/react';
import {useFetchTodos} from './useFetchTodos';
import {TodoDriver} from '../../../driver/todo/todoDriver';
import {TodoRepository} from '../../../repository/todo/todoRepository';
import {TodoUseCase} from '../../../use-case/todo/todoUseCase';

const todoDriverInstance = new TodoDriver();
const todoRepositoryInstance = new TodoRepository(todoDriverInstance);
const todoUseCaseInstance = new TodoUseCase(todoRepositoryInstance);

describe('useFetchTodos', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('todoの取得に成功したら、todoが2個取得できる', async () => {
    const spyTodoUseCaseInstance = jest
      .spyOn(todoUseCaseInstance, 'fetchAll')
      .mockResolvedValue(testApplicationTodos);

    const {result} = renderHook(() => useFetchTodos(todoUseCaseInstance));
    await waitFor(() => expect(spyTodoUseCaseInstance).toHaveBeenCalled());
    await waitFor(() => expect(result.current.todos.length).toBe(2));
  });

  it('todoの取得に失敗したら、todoが0個取得できる', async () => {
    const spyTodoUseCaseInstance = jest
      .spyOn(todoUseCaseInstance, 'fetchAll')
      .mockRejectedValue(() => {
        throw new Error();
      });
    const {result} = renderHook(() => useFetchTodos(todoUseCaseInstance));
    await waitFor(() => expect(spyTodoUseCaseInstance).toHaveBeenCalled());
    await waitFor(() => expect(result.current.todos.length).toBe(0));
  });
});
