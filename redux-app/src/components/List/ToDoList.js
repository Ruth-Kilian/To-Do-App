/*
This component contains the checkbox, 2 buttons and the list

The todos variable retrieves the data from the state (initialTodoState) using useSelector
and then is mapped through the keys (unique ID) of the data object to render a list

There are 3 event handlers:
handleToggle: called when the user toggles the checkbox to mark an item as "complete"
handleDelete: called when the user clicks the button. it calls the dispatch action to delete the item
handleEdit: called when the user clicks the button, a prompt pops up and the newContent variable replaces the oldContent
*/

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../../features/todoSlice';
import './List.css'

const TodoList = () => {
  const todos = useSelector(state => state.todo.data);
  const dispatch = useDispatch();

  const handleToggle = id => {
    dispatch(toggleTodo({ id }));
  };

  const handleDelete = id => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = (id, content) => {
    const newContent = prompt("Enter new To-Do", content);
    if (newContent) {
      dispatch(editTodo({ id, content: newContent }));
    }
  };

  return (
    <ul>
      {Object.keys(todos).map(id => (
        <li key={id}>
          <input className='checkbox' type="checkbox" checked={todos[id].completed} onChange={() => handleToggle(id)} />
          <span className='list'>{todos[id].content}</span>
          <button className='button1' onClick={() => handleDelete(id)}>Delete</button>
          <button className='button2' onClick={() => handleEdit(id, todos.content)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;