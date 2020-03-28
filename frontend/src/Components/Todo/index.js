import './style.css';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
// import _ from 'lodash';

export default function Todo({ todo, removeTodo }) {
  return (
    <div className='todo' data-test='todo'>
      <div className='type todo-item'>{todo.type}</div>
      <div className='subject todo-item'>{todo.subject}</div>
      <div className='points todo-item'>{todo.points}</div>
      <div className='priority todo-item'>{todo.priority}</div>
      <div className='remove todo-item'>
        <FaTrashAlt
          className='remove'
          data-test='remove-todo-icon'
          onClick={() => removeTodo(todo)}
        />
      </div>
    </div>
  );
}
