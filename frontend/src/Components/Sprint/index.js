import './style.css';
import React from 'react';
import Todo from '../Todo/index';

export default function Sprint({ sprint, todos, removeTodo }) {
  return (
    <div className='sprint'>
      <h1 id='sprint-name'>{sprint.name}</h1>
      {todos &&
        todos.length > 0 &&
        todos.map((todo, i) => (
          <Todo key={i} todo={todo} removeTodo={removeTodo} />
        ))}
    </div>
  );
}
