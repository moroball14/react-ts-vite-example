/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen} from '@testing-library/react';
import {testApplicationTodos} from '../../../../__test__/todos/testData';
import {TodoList} from './TodoList';

describe('TodoList', () => {
  it('propsで渡された数だけ、Todoを描画する', () => {
    render(<TodoList todos={testApplicationTodos} />);
    expect(screen.getAllByTestId('todo-component').length).toBe(
      testApplicationTodos.length
    );
  });
});
