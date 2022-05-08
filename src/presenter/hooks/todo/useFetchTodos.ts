import {useCallback, useEffect, useMemo, useState} from 'react';
import {TodoDriver} from '../../../driver/todo/todoDriver';
import {TodoEntity} from '../../../entity/todo/todo';
import {TodoRepository} from '../../../repository/todo/todoRepository';
import {TodoUseCase} from '../../../use-case/todo/todoUseCase';

export const useFetchTodos = () => {
  const todoDriverInstance = useMemo(() => new TodoDriver(), []);
  const todoRepositoryInstance = useMemo(
    () => new TodoRepository(todoDriverInstance),
    [todoDriverInstance]
  );
  const todoUseCaseInstance = useMemo(
    () => new TodoUseCase(todoRepositoryInstance),
    [todoRepositoryInstance]
  );

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
