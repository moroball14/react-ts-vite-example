import React, {useMemo} from 'react';
import {TodoList} from './TodoList';
import {useFetchTodos} from '../../../../presenter/hooks/todo/useFetchTodos';
import {TodoDriver} from '../../../../driver/todo/todoDriver';
import {TodoRepository} from '../../../../repository/todo/todoRepository';
import {TodoUseCase} from '../../../../use-case/todo/todoUseCase';

export const TodoScreen = () => {
  const todoDriverInstance = useMemo(() => new TodoDriver(), []);
  const todoRepositoryInstance = useMemo(
    () => new TodoRepository(todoDriverInstance),
    [todoDriverInstance]
  );
  const todoUseCaseInstance = useMemo(
    () => new TodoUseCase(todoRepositoryInstance),
    [todoRepositoryInstance]
  );
  const {todos} = useFetchTodos(todoUseCaseInstance);

  return <TodoList todos={todos} />;
};
