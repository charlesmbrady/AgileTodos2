import './style.css';
import React, { useState, useEffect } from 'react';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';

export default function Dashboard() {
  const [sprints, setSprints] = useState([]);
  const [todos, setTodos] = useState([]);

  const getSprints = await API.getAllSprints();
  const getTodos = await API.getAllSprints();
  
  useEffect(() => {
    setSprints(getSprints);
    setTodos(getTodos);
  }, [])

  return (
    <div className='Dashboard'>
      {/* This is the backlog */}
      <div className='sprint-list'>
        {sprints.map((sprint, index) => (
          <Sprint key={index} sprint={sprint} />
        ))}
      </div>
      <div className='backlog todos'></div>
    </div>
  );
}
