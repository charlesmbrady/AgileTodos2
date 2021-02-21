import './style.css';
import React from 'react';
import {
  FaTrashAlt,
  FaAngleDown,
  FaAngleUp,
  FaAngleDoubleUp,
} from 'react-icons/fa';
// import _ from 'lodash';

export default function Todo({ todo, removeTodo, editTodo }) {
  const trash = (
    <FaTrashAlt
      className='remove'
      data-test='remove-todo-icon'
      onClick={() => removeTodo(todo)}
    />
  );

  let priority;
  switch (todo.priority) {
    case '1':
      priority = <FaAngleDown color='lightblue' />;
      break;

    case '2':
      priority = <FaAngleUp color='red' />;
      break;

    case '3':
      priority = <FaAngleDoubleUp color='yellow' />;
      break;

    default:
      <FaAngleDown />;
  }

  const points = <div>{todo.points}</div>;

  let type = <div>{todo.type}</div>;
  // Chores/tasks, learning, physical, other

  const status = <div>{todo.status}</div>;

  const items = [status, type, priority, points, trash];
  return (
    <div className='header-track'>
      <p className='track-title' onClick={() => editTodo(todo)}>
        {todo.subject}
      </p>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div className='track-item-container'>
            <li className='track-item' key={i}>
              {item}
            </li>
          </div>
        ))}
    </div>
  );
}
