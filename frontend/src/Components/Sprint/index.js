import './style.css';
import React from 'react';

export default function Sprint({ sprint }) {
  return (
    <div className='sprint todos'>
      {sprint.todos.length > 0 &&
        sprint.todos.map(todo => {
          <Todo todo={todo} />;
        })}
    </div>
  );
}
