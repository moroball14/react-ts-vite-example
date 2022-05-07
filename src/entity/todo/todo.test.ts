import {Todo, TodoEntity} from './todo';

const A_DAY_MILLISECOND = 86400000;
const baseTodo: TodoEntity = {
  userId: 1,
  id: 1,
  title: 'dummyTitle',
  completed: false,
  deadlineDate: new Date(),
};
const todoInstance = new Todo(baseTodo);

describe('Todo', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('generateUniqueId', () => {
    it('userIdとidを-で繋いだ文字列を返す', () => {
      const uniqueId = todoInstance.generateUniqueId();
      expect(uniqueId).toBe('1-1');
    });
  });

  describe('isCompleted', () => {
    it('completed = trueの場合、trueを返す', () => {
      const todo = {...baseTodo, completed: true};
      const todoInstance = new Todo(todo);
      expect(todoInstance.isCompleted()).toBeTruthy();
    });

    it('completed = falseの場合、falseを返す', () => {
      expect(todoInstance.isCompleted()).toBeFalsy();
    });
  });

  describe('isDeadlineExceeded', () => {
    it('今日が締切日より前の場合、falseを返す', () => {
      const tomorrow = new Date().valueOf() + A_DAY_MILLISECOND;
      const deadlineDate = new Date(tomorrow);

      const todo = {...baseTodo, deadlineDate};
      const todoInstance = new Todo(todo);
      expect(todoInstance.isDeadlineExceeded()).toBeFalsy();
    });

    it('今日が締切日の場合、falseを返す', () => {
      expect(todoInstance.isDeadlineExceeded()).toBeFalsy();
    });

    it('今日が締切日より後の場合、trueを返す', () => {
      const yesterday = new Date().valueOf() - A_DAY_MILLISECOND;
      const deadlineDate = new Date(yesterday);

      const todo = {...baseTodo, deadlineDate};
      const todoInstance = new Todo(todo);
      expect(todoInstance.isDeadlineExceeded()).toBeTruthy();
    });
  });
});
