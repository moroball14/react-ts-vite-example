/**
 * axiosのmockは以下を参考にした
 * https://www.csrhymes.com/2022/03/09/mocking-axios-with-jest-and-typescript.html
 */

import axios from 'axios';
import {TodoDriver} from './todoDriver';
import {testTodos} from '../../__test__/todos/testData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const todoDriverInstance = new TodoDriver();

describe('TodoDriver', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchAll', () => {
    it('APIアクセスが成功したら、TODOが2つ返却される', async () => {
      const response = {data: testTodos};
      mockedAxios.get.mockResolvedValue(response);

      const fetchTodos = await todoDriverInstance.fetchAll();
      expect(fetchTodos.length).toBe(2);
    });

    it('APIアクセスが失敗したら、エラー「todo driver failed to fetch todos.」がthrowされる', async () => {
      mockedAxios.get.mockRejectedValue(() => {
        throw new Error();
      });

      await expect(todoDriverInstance.fetchAll()).rejects.toThrow(
        'todo driver failed to fetch todos.'
      );
    });
  });
});
