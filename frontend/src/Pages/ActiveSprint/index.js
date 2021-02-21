import './style.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utilities/API';
import EditTodo from './modals/EditTodo';

export default function ActiveSprint() {
  const [sprint, setSprint] = useState([]);
  const [todo, setTodo] = useState(0);
  const [editTodoModal, setEditTodoModal] = useState(false);

  const toggleEditTodoModal = () => {
    setEditTodoModal(!editTodoModal);
  };

  const editTodo = (todo) => {
    setTodo(todo);
    setEditTodoModal(!editTodoModal);
  };

  useEffect(() => {
    //get sprints, filter for the one that is active status
    //populate sprint
    API.getSprints().then((res) => {
      console.log(res.data);
      let activeSprint = res.data.filter((sprint) => sprint.status == 'active');
      setSprint(activeSprint[0]);
    });
  }, [editTodoModal]);

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
            sprint.Todos != undefined &&
            sprint.Todos.filter(
              (todo) => todo.status == 'not started'
            ).map((todo) => (
              <div onClick={() => editTodo(todo)}>{todo.subject}</div>
            ))}
        </div>
        <div className='status'>
          <h3 className='status-name'>In Progress</h3>
          {/* Filter and Map cards here */}
          {sprint != undefined &&
            sprint.Todos != undefined &&
            sprint.Todos.filter(
              (todo) => todo.status == 'in progress'
            ).map((todo) => (
              <div onClick={() => editTodo(todo)}>{todo.subject}</div>
            ))}
        </div>
        <div className='status'>
          <h3 className='status-name'>Completed</h3>
          {/* Filter and Map cards here */}
          {sprint != undefined &&
            sprint.Todos != undefined &&
            sprint.Todos.filter(
              (todo) => todo.status == 'completed'
            ).map((todo) => (
              <div onClick={() => editTodo(todo)}>{todo.subject}</div>
            ))}
        </div>
      </div>

      {/* _______________________________________ MODALS _______________________________________ */}

      {editTodoModal && (
        <EditTodo
          isOpen={editTodoModal}
          toggle={toggleEditTodoModal}
          setEditTodoModal={setEditTodoModal}
          editTodoModal={editTodoModal}
          todo={todo}
        />
      )}
    </div>
  );
}
