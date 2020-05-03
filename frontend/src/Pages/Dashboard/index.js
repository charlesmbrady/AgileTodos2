import './style.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utilities/API';
import Sprint from './Components/Sprint/index.js';
import CreateSprint from './modals/CreateSprint';
import CreateTodo from './modals/CreateTodo';
import EditTodo from './modals/EditTodo';
import HeaderTrack from '../../Components/HeaderTrack/index';
import ToolsTrack from './Components/ToolsTrack/index';

export default function Dashboard() {
  const [sprints, setSprints] = useState(null);
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [todo, setTodo] = useState(0);

  const editTodo = (todo) => {
    setTodo(todo);
    setEditTodoModal(!editTodoModal);
  };

  //Modals
  const [createSprintModal, setCreateSprintModal] = useState(false);
  const [createTodoModal, setCreateTodoModal] = useState(false);
  const [editTodoModal, setEditTodoModal] = useState(false);

  const toggleCreateSprintModal = () => {
    setCreateSprintModal(!createSprintModal);
  };
  const toggleCreateTodoModal = () => {
    setCreateTodoModal(!createTodoModal);
  };
  const toggleEditTodoModal = () => {
    setEditTodoModal(!editTodoModal);
  };

  const apiCall = () => {
    let temp = counter + 1;
    setCounter(temp);
  };

  const removeTodo = (todo) => {
    setCounter(counter + 1);

    API.removeTodo(todo).then((res) => {
      if (res) {
        apiCall();
      }
    });
  };

  useEffect(() => {
    API.getSprints().then((res) => {
      // if (res) {
      setSprints(res.data);
      // }
      API.getTodos().then((todosRes) => {
        // if (todosRes.status == 200) {
        setTodos(todosRes.data);
        // }
      });
    });
  }, [createSprintModal, createTodoModal, editTodoModal, counter]);

  return (
    <div className='dashboard'>
      <HeaderTrack />
      <ToolsTrack />
      <div className='sprint-list'>
        {sprints != undefined &&
          sprints.map((sprint, index) => (
            <Sprint
              key={index}
              index={index}
              sprint={sprint}
              editTodo={editTodo}
              todos={todos.filter((todo) => todo.SprintId == sprint.id)}
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
      {editTodoModal && (
        <EditTodo
          isOpen={editTodoModal}
          toggle={toggleEditTodoModal}
          setEditTodoModal={setEditTodoModal}
          editTodoModal={editTodoModal}
          sprints={sprints}
          todo={todo}
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
