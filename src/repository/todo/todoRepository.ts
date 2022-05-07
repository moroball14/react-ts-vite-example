import {TodoType} from '../../db/json/types/todo';
import {ITodoDriver} from '../../driver/todo/todoDriver';

export class TodoRepository {
  private readonly todoDriver: ITodoDriver;
  constructor(todoDriver: ITodoDriver) {
    this.todoDriver = todoDriver;
  }

  /**
   * API経由で取得できたTODOをアプリケーション用に整形
   */
  public fetchAll = async () => {
    try {
      const res = await this.todoDriver.fetchAll();
      const data = this.convertForEntity(res);
      return data;
    } catch (error) {
      throw new Error('todo repository failed to fetch todos.');
    }
  };

  private convertForEntity = (todos: TodoType[]) => {
    return todos.map((todo) => ({
      ...todo,
      deadlineDate: new Date(),
    }));
  };
}
