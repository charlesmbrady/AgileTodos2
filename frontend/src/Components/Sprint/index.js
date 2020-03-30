import './style.css';
import React from 'react';
import Todo from '../Todo/index';
import API from '../../Utilities/API';

export default function Sprint({ sprint, todos, removeTodo, index }) {
  const activateSprint = sprint => {
    sprint.status = 'active';
    //PUT new sprint to update
    API.updateSprint(sprint).then(res => {
      if (res) {
        console.log('ok');
      }
    });
  };

  return (
    <div className='sprint'>
      <h1 id='sprint-name'>{sprint.name}</h1>
      {index == 0 && (
        <button onClick={() => activateSprint(sprint)}>Start Sprint</button>
      )}
      {todos &&
        todos.length > 0 &&
        todos.map((todo, i) => (
          <Todo key={i} todo={todo} removeTodo={removeTodo} />
        ))}
    </div>
  );
}
