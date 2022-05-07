import {ITodoRepository} from '../../repository/todo/todoRepository';

/**
 * アプリケーションにおける動作を定義
 */
export class TodoUseCase {
  private readonly todoRepository: ITodoRepository;
  constructor(todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository;
  }

  /**
   * 全てのtodoを取得
   */
  public fetchAll = async () => {
    try {
      const todos = await this.todoRepository.fetchAll();
      return todos;
    } catch (error) {
      throw new Error('todo use case failed to fetch todos.');
    }
  };
}
