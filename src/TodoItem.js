import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import { Delete } from '@mui/icons-material';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => removeTodo(index)}>
          <Delete />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => completeTodo(index)}
      />
      <ListItemText
        primary={todo.text}
        style={{
          textDecoration: todo.isCompleted ? 'line-through' : 'none',
        }}
      />
    </ListItem>
  );
}

export default TodoItem;
