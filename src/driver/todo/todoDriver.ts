import axios from 'axios';
import {TodoType} from '../../db/json/types/todo';
import {API_URL} from '../const';

const TODO_URL = `${API_URL}/todos`;

export interface ITodoDriver {
  fetchAll: () => Promise<TodoType[]>;
}

export class TodoDriver implements ITodoDriver {
  /**
   * api経由でtodoを全て取得する関数
   */
  public fetchAll = async () => {
    try {
      const response = await axios.get<TodoType[]>(TODO_URL);
      return response.data;
    } catch (error) {
      throw new Error('todo driver failed to fetch todos.');
    }
  };
}
