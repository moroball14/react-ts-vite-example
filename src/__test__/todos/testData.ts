import {todo} from '../../db/json/data/todo';
import {TodoType} from '../../db/json/types/todo';
import {TodoEntity} from '../../entity/todo/todo';

export const applicationTodo: TodoEntity = {
  ...todo,
  deadlineDate: new Date(),
};

export const testDbTodos: TodoType[] = new Array(2).fill(todo);
export const testApplicationTodos: TodoEntity[] = new Array(2).fill({
  ...todo,
  deadlineDate: new Date(),
});
