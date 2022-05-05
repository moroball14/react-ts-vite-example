import axios from 'axios';
import {TodoType} from '../../db/json/types/todo';
import {API_URL} from '../const';

const TODO_URL = `${API_URL}/todos`;

export class TodoDriver {
  /**
   * api経由でtodoを全て取得する関数
   */
  public static fetchAll = async () => {
    try {
      const response = await axios.get<TodoType[]>(TODO_URL);
      return response.data;
    } catch (error) {
      throw new Error('failed fetch todos.');
    }
  };
}
