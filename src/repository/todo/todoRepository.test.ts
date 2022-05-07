import {TodoRepository} from './todoRepository';
import {TodoDriver} from '../../driver/todo/todoDriver';
import {testDbTodos} from '../../__test__/todos/testData';

const todoDriverInstance = new TodoDriver();
const todoRepositoryInstance = new TodoRepository(todoDriverInstance);

describe('TodoRepository', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchAll', () => {
    it('todoDriver.fetchAllが成功した場合、取得したデータと同じ数だけdeadlineを追加したデータを返却する', async () => {
      const spyTodoDriver = jest
        .spyOn(todoDriverInstance, 'fetchAll')
        .mockResolvedValue(testDbTodos);

      const todos = await todoRepositoryInstance.fetchAll();

      expect(spyTodoDriver).toHaveBeenCalledTimes(1);
      expect(todos.length).toBe(2);
      for (const todo of todos) {
        expect(todo).toHaveProperty('deadlineDate');
      }
    });

    it('todoDriver.fetchAllが失敗した場合、エラー「todo repository failed to fetch todos.」がthrowされる', async () => {
      const spyTodoDriver = jest
        .spyOn(todoDriverInstance, 'fetchAll')
        .mockRejectedValue(() => {
          throw new Error();
        });

      await expect(todoRepositoryInstance.fetchAll()).rejects.toThrow(
        'todo repository failed to fetch todos.'
      );
      expect(spyTodoDriver).toHaveBeenCalledTimes(1);
    });
  });
});
