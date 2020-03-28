import './style.css';
import React from 'react';
import Todo from '../Todo/index';

export default function Sprint({ sprint, todos }) {
  // const sprintTodos = todos.filter(todo => (todo.SprintId = sprint.id));
  return (
    <div className='sprint'>
      <h1>{sprint.name}</h1>
      {todos && todos.length > 0 && todos.map(todo => <Todo todo={todo} />)}
    </div>
  );
}
