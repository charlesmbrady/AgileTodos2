import './style.css';
import React, { useState, useEffect } from 'react';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';
import CreateSprint from './modals/CreateSprint';
// import CreateTodo from './modals/CreateTodo';
// import EditTodo from './modals/EditTodo';

export default function Dashboard() {
  const [sprints, setSprints] = useState(null);
  const [todos, setTodos] = useState([]);

  //Modals
  const [createSprintModal, setCreateSprintModal] = useState(false);
  // const [createTodoModal, setCreateTodoModal] = useState(false);
  // const [editTodoModal] = useState(true);

  const toggleCreateSprintModal = () => {
    setCreateSprintModal(!createSprintModal);
  };
  // const toggleCreateTodoModal = () => {
  //   setCreateTodoModal(!createTodoModal);
  // };

  useEffect(() => {
    API.getSprints().then(res => {
      if (res.status == 200) {
        console.log(res.data);
        setSprints(res.data);
      }
    });
  }, [createSprintModal]);

  return (
    <div className='Dashboard'>
      {/* This is the backlog */}
      <h1>Dashboard</h1>
      <div className='sprint-list'>
        {sprints != undefined &&
          sprints.map((sprint, index) => (
            <Sprint key={index} sprint={sprint} />
          ))}
      </div>
      <button
        data-test='dashboard-create-sprint-button'
        onClick={() => toggleCreateSprintModal()}
      >
        Add sprint
      </button>
      <div className='backlog todos'></div>

      {/* _______________________________________ MODALS _______________________________________ */}
      {/* {createTodoModal && (
        <CreateTodo
          isOpen={createTodoModal}
          toggle={toggleCreateTodoModal}
          userId={user.id}
        />
      )}
      {todo && (
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
