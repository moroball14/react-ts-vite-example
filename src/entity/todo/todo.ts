import * as dayjs from 'dayjs';

export type TodoEntity = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  deadlineDate: Date;
};

export class Todo {
  private readonly userId: number;
  private readonly id: number;
  private readonly title: string;
  private readonly completed: boolean;
  private readonly deadlineDate: Date;

  constructor(data: TodoEntity) {
    this.userId = data.userId;
    this.id = data.id;
    this.title = data.title;
    this.completed = data.completed;
    this.deadlineDate = data.deadlineDate;
  }

  /**
   * 一位のidを生成する関数
   */
  public generateUniqueId() {
    return `${this.userId}-${this.id}`;
  }

  /**
   * 完了しているかどうかの判定
   */
  public isCompleted() {
    return this.completed;
  }

  /**
   * 締め切りを過ぎているかどうかの判定
   */
  public isDeadlineExceeded = () => {
    const now = dayjs();
    const deadline = dayjs(this.deadlineDate);
    return now.isAfter(deadline, 'day');
  };
}
