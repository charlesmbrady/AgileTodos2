import './style.css';
import React from 'react';
import Todo from '../Todo/index';
import API from '../../../../Utilities/API';
import SprintTrack from '../SprintTrack';

export default function Sprint({ sprint, todos, removeTodo, index, editTodo }) {
  return (
    <div className='sprint'>
      <SprintTrack sprint={sprint} index={index} />
      {todos &&
        todos.length > 0 &&
        todos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
    </div>
  );
}
