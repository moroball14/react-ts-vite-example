import {TodoDriver} from '../../driver/todo/todoDriver';
import {TodoRepository} from '../../repository/todo/todoRepository';
import {testApplicationTodos} from '../../__test__/todos/testData';
import {TodoUseCase} from './todoUseCase';

const todoDriverInstance = new TodoDriver();
const todoRepositoryInstance = new TodoRepository(todoDriverInstance);
const todoUseCaseInstance = new TodoUseCase(todoRepositoryInstance);

describe('TodoUseCase', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchAll', () => {
    it('todoRepository.fetchAllが成功した場合、TODOが2つ返却される', async () => {
      const spyTodoRepository = jest
        .spyOn(todoRepositoryInstance, 'fetchAll')
        .mockResolvedValue(testApplicationTodos);

      const todos = await todoUseCaseInstance.fetchAll();

      expect(spyTodoRepository).toHaveBeenCalledTimes(1);
      expect(todos.length).toBe(2);
    });

    it('todoRepository.fetchAllが失敗した場合、エラー「todo repository failed to fetch todos.」がthrowされる', async () => {
      const spyTodoRepository = jest
        .spyOn(todoRepositoryInstance, 'fetchAll')
        .mockRejectedValue(() => {
          throw new Error();
        });

      await expect(todoUseCaseInstance.fetchAll()).rejects.toThrow(
        'todo use case failed to fetch todos.'
      );
      expect(spyTodoRepository).toHaveBeenCalledTimes(1);
    });
  });
});
