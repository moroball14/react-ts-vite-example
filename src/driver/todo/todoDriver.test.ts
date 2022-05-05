/**
 * axiosのmockは以下を参考にした
 * https://www.csrhymes.com/2022/03/09/mocking-axios-with-jest-and-typescript.html
 */

import axios from 'axios';
import {todo} from '../../db/json/data/todo';
import {TodoDriver} from './todoDriver';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('TodoDriver', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchAll', () => {
    it('APIアクセスが成功したら、TODOが2つ返却される', async () => {
      const demoTodos = [todo, todo];
      const response = {data: demoTodos};
      mockedAxios.get.mockResolvedValue(response);

      const fetchTodos = await TodoDriver.fetchAll();
      expect(fetchTodos.length).toBe(2);
    });

    it('APIアクセスが失敗したら、エラー「failed fetch todos.」がthrowされる', async () => {
      mockedAxios.get.mockRejectedValue(() => {
        throw new Error();
      });

      await expect(TodoDriver.fetchAll()).rejects.toThrow(
        'failed fetch todos.'
      );
    });
  });
});
