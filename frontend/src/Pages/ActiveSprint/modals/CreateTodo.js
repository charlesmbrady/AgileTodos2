import React, { useState } from 'react';
import './style.css';
import API from '../../../Utilities/API';

export default function CreateTodo({
  isOpen,
  toggle,
  setCreateTodoModal,
  createTodoModal,
  sprints
}) {
  const [todo, setTodo] = useState({
    subject: '',
    description: '',
    priority: 0,
    type: '',
    SprintId: null
  });
  const showHideClassName = isOpen
    ? 'modal display-block'
    : 'modal display-none';

  const formUpdate = (fieldName, value) => {
    let tempTodo = { ...todo };
    tempTodo[fieldName] = value;

    setTodo(tempTodo);
  };

  const addTodo = () => {
    API.createTodo(todo).then(res => {
      if (res.status == 200) {
        // toggle();
        setCreateTodoModal(!createTodoModal);
      } else {
        return false;
      }
    });
  };

  return (
    <div className={showHideClassName}>
      <form
        id='form'
        className='form modal-main'
        onSubmit={e => e.preventDefault()}
      >
        <h2 data-test='header'>Create a Todo</h2>
        <div className='form-control'>
          <label for='subject' data-test='create-todo-modal-label-subject'>
            Subject
          </label>
          <input
            type='text'
            id='subject'
            placeholder='Enter subject'
            name='subject'
            data-test='create-todo-modal-input-subject'
            value={todo.subject}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='create-todo-modal-error-subject'>
            Error message
          </small>

          <label
            for='description'
            data-test='create-todo-modal-label-description'
          >
            Description
          </label>
          <input
            type='text'
            id='description'
            placeholder='Enter description'
            name='description'
            data-test='create-todo-modal-input-description'
            value={todo.description}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          />
          <small
            className='error'
            data-test='create-todo-modal-error-description'
          >
            Error message
          </small>

          <label for='type' data-test='create-todo-modal-label-type'>
            Type
          </label>
          <select
            type='text'
            id='type'
            placeholder='Enter type'
            name='type'
            data-test='create-todo-modal-input-type'
            value={todo.type}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          >
            <option value='personal' selected>
              Personal
            </option>
            <option value='work'>Work</option>
            <option value='learning'>Learning</option>
          </select>
          <small className='error' data-test='create-todo-modal-error-type'>
            Error message
          </small>

          <label for='priority' data-test='create-todo-modal-label-priority'>
            Priority
          </label>
          <select
            type='text'
            id='priority'
            placeholder='Enter priority'
            name='priority'
            data-test='create-todo-modal-input-priority'
            value={todo.priority}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          >
            <option value='2' selected>
              Medium
            </option>
            <option value='3'>High</option>
            <option value='1'>Low</option>
          </select>
          <small className='error' data-test='create-todo-modal-error-priority'>
            Error message
          </small>

          <label for='points' data-test='create-todo-modal-label-points'>
            Points
          </label>
          <input
            type='number'
            id='points'
            placeholder='Enter points'
            name='points'
            data-test='create-todo-modal-input-points'
            value={todo.points}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='create-todo-modal-error-points'>
            Error message
          </small>

          <label for='sprint' data-test='create-todo-modal-label-sprint'>
            Sprint
          </label>
          <select
            type='text'
            id='sprint'
            placeholder='Enter sprint'
            name='SprintId'
            data-test='create-todo-modal-input-sprint'
            value={todo.SprintId}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          >
            <option value={0} selected disabled hidden>
              Select Sprint...
            </option>
            {sprints &&
              sprints
                .filter(sprint => sprint.status != 'closed')
                .map(sprint => (
                  <option value={sprint.id}>{sprint.name}</option>
                ))}
          </select>
          <small className='error' data-test='create-todo-modal-error-sprint'>
            Error message
          </small>
        </div>

        <button
          type='submit'
          className='close'
          data-test='create-todo-modal-submit-button'
          onClick={() => addTodo()}
        >
          Submit
        </button>
        <button
          type='cancel'
          className='close'
          data-test='create-todo-modal-cancel-button'
          onClick={() => toggle()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
