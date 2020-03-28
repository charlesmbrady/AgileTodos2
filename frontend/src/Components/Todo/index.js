import './style.css';
import React from 'react';

export default function Todo({ todo }) {
  return (
    <div className='todo' data-test='todo'>
      <div className='type'>{todo.type}</div>
      <div className='subject'>{todo.subject}</div>
      <div className='points'>{todo.points}</div>
      <div className='priority'>{todo.priority}</div>
    </div>
  );
}
