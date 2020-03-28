import './style.css';
import React, { useState, useEffect } from 'react';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';
import CreateSprint from './modals/CreateSprint';
import CreateTodo from './modals/CreateTodo';
// import EditTodo from './modals/EditTodo';

export default function Dashboard() {
  const [sprints, setSprints] = useState(null);
  const [todos, setTodos] = useState([]);

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
  }, [createSprintModal, createTodoModal]);

  return (
    <div className='Dashboard'>
      {/* This is the backlog */}
      <h1>Dashboard</h1>
      <div className='sprint-list'>
        {sprints != undefined &&
          sprints.map((sprint, index) => (
            <Sprint key={index} sprint={sprint} todos={todos} />
          ))}
      </div>
      <button
        data-test='dashboard-create-sprint-button'
        onClick={() => toggleCreateSprintModal()}
      >
        Add sprint
      </button>
      <button
        data-test='dashboard-create-todo-button'
        onClick={() => toggleCreateTodoModal()}
      >
        Add todo
      </button>

      <div className='backlog todos'></div>

      {/* _______________________________________ MODALS _______________________________________ */}
      {createTodoModal && (
        <CreateTodo
          isOpen={createTodoModal}
          toggle={toggleCreateTodoModal}
          setCreateTodoModal={setCreateTodoModal}
          createTodoModal={createTodoModal}
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
