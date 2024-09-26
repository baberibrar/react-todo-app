import React from 'react';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

function TodoList({ todos, completeTodo, removeTodo }) {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;
