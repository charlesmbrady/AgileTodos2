import React, { useState } from 'react';
import './style.css';
import API from '../../../Utilities/API';

export default function EditTodo({
  isOpen,
  toggle,
  setEditTodoModal,
  editTodoModal,
  todo,
  sprints
}) {
  const [editTodo, setEditTodo] = useState(todo);
  const showHideClassName = isOpen
    ? 'modal display-block'
    : 'modal display-none';

  const formUpdate = (fieldName, value) => {
    let tempTodo = { ...editTodo };
    tempTodo[fieldName] = value;

    setEditTodo(tempTodo);
  };

  const updateTodo = () => {
    API.updateTodo(editTodo).then(res => {
      if (res.status == 200) {
        // toggle();
        setEditTodoModal(!editTodoModal);
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
        <h2 data-test='header'>Edit Todo</h2>
        <div className='form-control'>
          <label for='subject' data-test='edit-todo-modal-label-subject'>
            Subject
          </label>
          <input
            type='text'
            id='subject'
            placeholder='Enter subject'
            name='subject'
            data-test='edit-todo-modal-input-subject'
            value={editTodo.subject}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='edit-todo-modal-error-subject'>
            Error message
          </small>

          <label
            for='description'
            data-test='edit-todo-modal-label-description'
          >
            Description
          </label>
          <input
            type='text'
            id='description'
            placeholder='Enter description'
            name='description'
            data-test='edit-todo-modal-input-description'
            value={editTodo.description}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          />
          <small
            className='error'
            data-test='edit-todo-modal-error-description'
          >
            Error message
          </small>

          <label for='type' data-test='edit-todo-modal-label-type'>
            Type
          </label>
          <select
            type='text'
            id='type'
            placeholder='Enter type'
            name='type'
            data-test='edit-todo-modal-input-type'
            value={editTodo.type}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          >
            <option value='personal' selected>
              Personal
            </option>
            <option value='work'>Work</option>
            <option value='learning'>Learning</option>
          </select>
          <small className='error' data-test='edit-todo-modal-error-type'>
            Error message
          </small>

          <label for='priority' data-test='edit-todo-modal-label-priority'>
            Priority
          </label>
          <select
            type='text'
            id='priority'
            placeholder='Enter priority'
            name='priority'
            data-test='edit-todo-modal-input-priority'
            value={editTodo.priority}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          >
            <option value='2' selected>
              Medium
            </option>
            <option value='3'>High</option>
            <option value='1'>Low</option>
          </select>
          <small className='error' data-test='edit-todo-modal-error-priority'>
            Error message
          </small>

          <label for='status' data-test='edit-todo-modal-label-status'>
            Status
          </label>
          <select
            type='text'
            id='status'
            placeholder='Enter status'
            name='status'
            data-test='edit-todo-modal-input-status'
            value={editTodo.status}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          >
            <option value='not started' selected>
              Not started
            </option>
            <option value='in progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
          <small className='error' data-test='edit-todo-modal-error-status'>
            Error message
          </small>

          <label for='points' data-test='edit-todo-modal-label-points'>
            Points
          </label>
          <input
            type='number'
            id='points'
            placeholder='Enter points'
            name='points'
            data-test='edit-todo-modal-input-points'
            value={editTodo.points}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='edit-todo-modal-error-points'>
            Error message
          </small>

          <label for='sprint' data-test='edit-todo-modal-label-sprint'>
            Sprint
          </label>
          <select
            type='text'
            id='sprint'
            placeholder='Enter sprint'
            name='SprintId'
            data-test='edit-todo-modal-input-sprint'
            value={editTodo.SprintId}
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
          <small className='error' data-test='edit-todo-modal-error-sprint'>
            Error message
          </small>
        </div>

        <button
          type='submit'
          className='close'
          data-test='edit-todo-modal-submit-button'
          onClick={() => updateTodo()}
        >
          Submit
        </button>
        <button
          type='cancel'
          className='close'
          data-test='edit-todo-modal-cancel-button'
          onClick={() => toggle()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
