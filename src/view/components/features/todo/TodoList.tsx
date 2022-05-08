import React from 'react';
import {TodoEntity} from '../../../../entity/todo/todo';
import {Todo} from './Todo';

interface P {
  todos: TodoEntity[];
}

export const TodoList = ({todos}: P) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={`${todo.userId}-${todo.id}-${index}`} todo={todo} />
      ))}
    </div>
  );
};
