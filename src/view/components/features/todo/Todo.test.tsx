/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen} from '@testing-library/react';
import {applicationTodo} from '../../../../__test__/todos/testData';
import {Todo} from './Todo';
import {TodoEntity} from '../../../../entity/todo/todo';
import '@testing-library/jest-dom';

describe('Todo', () => {
  it('propsで渡されたtodoのtitleを表示する', () => {
    const todo: TodoEntity = {...applicationTodo, title: 'test title'};
    render(<Todo todo={todo} />);

    expect(screen.getByTestId('todo-component')).toHaveTextContent(
      'test title'
    );
  });
});
