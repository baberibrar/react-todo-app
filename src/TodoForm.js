import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <TextField
          label="Add a todo"
          variant="outlined"
          value={input}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </Stack>
    </form>
  );
}

export default TodoForm;
