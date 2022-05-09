import {useCallback, useEffect, useState} from 'react';
import {TodoEntity} from '../../../entity/todo/todo';
import {TodoUseCase} from '../../../use-case/todo/todoUseCase';

export const useFetchTodos = (todoUseCaseInstance: TodoUseCase) => {
  const [todos, setTodos] = useState<TodoEntity[]>([]);

  const fetchTodos = useCallback(async () => {
    return await todoUseCaseInstance
      .fetchAll()
      .then((res) => setTodos(res))
      .catch((error) => console.log(error));
  }, [todoUseCaseInstance]);

  useEffect(() => {
    const unsub = fetchTodos();
    return () => {
      unsub;
    };
  }, [fetchTodos]);

  return {todos};
};
