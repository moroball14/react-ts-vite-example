import React from 'react';
import {TodoEntity} from '../../../../entity/todo/todo';

interface P {
  todo: TodoEntity;
}

export const Todo = ({todo}: P) => {
  return <div data-testid="todo-component">{todo.title}</div>;
};
