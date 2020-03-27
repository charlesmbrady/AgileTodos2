import './style.css';
import React, { useState, useEffect } from 'react';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';

export default function Dashboard() {
  const [sprints, setSprints] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    API.getSprints().then(res => {
      console.log(res);
      setSprints(res);
    });

    // setSprints(sprintsRes);
    // setTodos(todosRes);
  }, []);

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
