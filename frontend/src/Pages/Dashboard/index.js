import './style.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';
import CreateSprint from './modals/CreateSprint';
import CreateTodo from './modals/CreateTodo';
// import EditTodo from './modals/EditTodo';

export default function Dashboard() {
  const [sprints, setSprints] = useState(null);
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  //Modals
  const [createSprintModal, setCreateSprintModal] = useState(false);
  const [createTodoModal, setCreateTodoModal] = useState(false);
  // const [editTodoModal] = useState(true);

  const toggleCreateSprintModal = () => {
    setCreateSprintModal(!createSprintModal);
  };
  const toggleCreateTodoModal = () => {
    setCreateTodoModal(!createTodoModal);
  };

  const apiCall = () => {
    let temp = counter + 1;
    setCounter(temp);
  };

  const removeTodo = todo => {
    console.log('the todo id****** ' + todo.id);

    API.removeTodo(todo).then(res => {
      if (res) {
        apiCall();
      }
    });
  };

  useEffect(() => {
    API.getSprints().then(res => {
      // if (res) {
      setSprints(res.data);
      // }
      API.getTodos().then(todosRes => {
        // if (todosRes.status == 200) {
        setTodos(todosRes.data);
        // }
      });
    });
  }, [createSprintModal, createTodoModal, counter]);

  return (
    <div className='dashboard'>
      {/* This is the backlog */}
      <div id='dashboard-header'>
        <h1 id='dashboard-title' className='dashboard-header-item'>
          Dashboard
        </h1>
        <Link to='activesprint' data-test='dashboard-to-active'>
          Active Sprint
        </Link>
        <button
          id='create-sprint-button'
          className='dashboard-header-item'
          data-test='dashboard-create-sprint-button'
          onClick={() => toggleCreateSprintModal()}
        >
          Add sprint
        </button>
        <button
          id='create-todo-button'
          className='dashboard-header-item'
          data-test='dashboard-create-todo-button'
          onClick={() => toggleCreateTodoModal()}
        >
          Add todo
        </button>
      </div>
      <div className='sprint-list'>
        {sprints != undefined &&
          sprints.map((sprint, index) => (
            <Sprint
              key={index}
              index={index}
              sprint={sprint}
              todos={todos.filter(todo => todo.SprintId == sprint.id)}
              removeTodo={removeTodo}
            />
          ))}
      </div>

      <div className='backlog todos'></div>

      {/* _______________________________________ MODALS _______________________________________ */}
      {createTodoModal && (
        <CreateTodo
          isOpen={createTodoModal}
          toggle={toggleCreateTodoModal}
          setCreateTodoModal={setCreateTodoModal}
          createTodoModal={createTodoModal}
          sprints={sprints}
        />
      )}
      {/* {todo && (
        <EditTodo
          isOpen={editTodoModal}
          toggle={setTodo}
          todo={todo}
          sprintsList={sprintsList}
        />
      )} */}
      {createSprintModal && (
        <CreateSprint
          isOpen={createSprintModal}
          toggle={toggleCreateSprintModal}
        />
      )}
    </div>
  );
}
