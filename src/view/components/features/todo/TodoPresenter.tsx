import React from 'react';
import {TodoList} from './TodoList';
import {useFetchTodos} from '../../../../presenter/hooks/todo/useFetchTodos';

export const TodoPresenter = () => {
  const {todos} = useFetchTodos();

  return <TodoList todos={todos} />;
};
