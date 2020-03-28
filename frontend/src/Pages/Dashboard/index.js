import './style.css';
import React, { useState, useEffect } from 'react';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';
import CreateSprint from './modals/CreateSprint';
import CreateTodo from './modals/CreateTodo';
import EditTodo from './modals/EditTodo';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [myReq, setMyReq] = useState(0);
  const [sprints, setSprints] = useState([]);
  const [todos, setTodos] = useState([]);

  //Modals
  const [createSprintModal, setCreateSprintModal] = useState(false);
  // const [createTodoModal, setCreateTodoModal] = useState(false);
  const [editTodoModal] = useState(true);

  const toggleCreateSprintModal = () => {
    setCreateSprintModal(!createSprintModal);
  };
  // const toggleCreateTodoModal = () => {
  //   setCreateTodoModal(!createTodoModal);
  // };

  const addSprint = () => {
    // setLoading(true);
    setMyReq(myReq + 1);
    API.createSprint(sprint).then(res => {
      console.log(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    API.getSprints().then(res => {
      if (res.data.length > 0) {
        setSprints(res.data);
        setLoading(false);
      }
    });

    // setSprints(sprintsRes);
    // setTodos(todosRes);
  }, [myReq]);

  return (
    <div className='Dashboard'>
      {/* This is the backlog */}
      <h1>Dashboard</h1>
      <div className='sprint-list'>
        {sprints.length > 0 &&
          sprints.map((sprint, index) => (
            <Sprint key={index} sprint={sprint} />
          ))}
      </div>
      <button onClick={() => addSprint()}>Add sprint</button>
      <div className='backlog todos'></div>

      {/* _______________________________________ MODALS _______________________________________ */}
      {createTodoModal && (
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
      )}
      {createSprintModal && (
        <CreateSprint
          isOpen={createSprintModal}
          toggle={toggleCreateSprintModal}
        />
      )}
    </div>
  );
}
