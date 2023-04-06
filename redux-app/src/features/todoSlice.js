/*
There are 4 reducers:
addTodo: generates a new ID for the item, creates a new object with the item's content and completed status (set to default false).
toggleTodo: toggles the completed status of the item at the specific ID
deleteTodo: removes the item at the specific ID using the delete operator from the "data" object
editTodo: updates the content of the item with the specific ID
*/


import { createSlice } from '@reduxjs/toolkit';

// initialState of the todoSlice
const initialTodoState = {
  nextId: 2,
  data: {
    1: {
      content: 'Content 1',
      completed: false
    }
  }
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,

  reducers: {

    addTodo: (state, action) => {
      const { content } = action.payload;
      state.nextId += 1;
      state.data[state.nextId] = {
        content,
        completed: false
      };
    },

    toggleTodo: (state, action) => {
      const { id } = action.payload;
      state.data[id].completed = !state.data[id].completed;
    },

    deleteTodo: (state, action) => {
      const { id } = action.payload;
      delete state.data[id];
    },

    editTodo: (state, action) => {
      const { id, content } = action.payload;
      state.data[id].content = content;
    },
  }
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;