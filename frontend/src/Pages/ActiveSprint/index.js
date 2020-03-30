import './style.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';
import CreateSprint from './modals/CreateSprint';
import CreateTodo from './modals/CreateTodo';

export default function ActiveSprint() {
  const [sprint, setSprint] = useState([]);

  useEffect(() => {
    //get sprints, filter for the one that is active status
    //populate sprint
    API.getSprints().then(res => {
      console.log(res.data);
      res.data
        .filter(sprint => sprint.status == 'active')
        .then(sprints => setSprint(sprints[0]));
    });
  }, []);

  return (
    <div className='active'>
      {/* This is the backlog */}
      <div id='active-header'>
        <h1 id='active-title' className='active-header-item'>
          Active Sprint
        </h1>
        <Link to='/dashboard' data-test='active-to-dashboard'>
          Dashboard
        </Link>
      </div>
      <div className='active-sprint-detail'>
        {/* put time and points details here */}
      </div>
      <div className='status-list'>
        <div className='status'>
          <h3 className='status-name'>Not Started</h3>
          {/* Filter and Map cards here */}
          {sprint != undefined &&
            sprint.todos != undefined &&
            sprint.todos
              .filter(todo => todo.status === 'not started')
              .map(todo => <div>{todo.subject}</div>)}
        </div>
        <div className='status'>
          <h3 className='status-name'>In Progress</h3>
          {/* Filter and Map cards here */}
          {sprint != undefined &&
            sprint.todos != undefined &&
            sprint.todos
              .filter(todo => todo.status === 'in progress')
              .map(todo => <div>{todo.subject}</div>)}
        </div>
        <div className='status'>
          <h3 className='status-name'>Completed</h3>
          {/* Filter and Map cards here */}
          {sprint != undefined &&
            sprint.todos != undefined &&
            sprint.todos
              .filter(todo => todo.status === 'completed')
              .map(todo => <div>{todo.subject}</div>)}
        </div>
      </div>

      {/* _______________________________________ MODALS _______________________________________ */}
      {/* {createTodoModal && (
        <CreateTodo
          isOpen={createTodoModal}
          toggle={toggleCreateTodoModal}
          setCreateTodoModal={setCreateTodoModal}
          createTodoModal={createTodoModal}
          sprints={sprints}
        />
      )} */}
      {/* {todo && (
        <EditTodo
          isOpen={editTodoModal}
          toggle={setTodo}
          todo={todo}
          sprintsList={sprintsList}
        />
      )} */}
      {/* {createSprintModal && (
        <CreateSprint
          isOpen={createSprintModal}
          toggle={toggleCreateSprintModal}
        />
      )} */}
    </div>
  );
}
