/*
This component contains a form with an input field and a submit button.
useState keeps track of the user's input and useDispatch dispatchs the action "addTodo" to add the new to-do to the store
When the form is submitted the "addTodo" action is dispatched (using the useDispatch function)
with the content (using useState) in the input field as a payload.
The input is cleared after submission
*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoSlice';
import './Form.css'

const AddTodoForm = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo({ content }));
    setContent('');
  };

  return (
    <div className='Form'>
    <form onSubmit={handleSubmit}>
      <input className='input' type="text" value={content} onChange={e => setContent(e.target.value)} />
      <button className='button' type="submit">Add</button>
    </form>
    </div>
  );
};

export default AddTodoForm;