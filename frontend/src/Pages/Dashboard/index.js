import './style.css';
import React, { useState, useEffect } from 'react';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [myReq, setMyReq] = useState(0);
  const [sprints, setSprints] = useState([]);
  const [todos, setTodos] = useState([]);

  const sprint = {
    subject: 'a subj',
    description: 'a descript',
    points: 2
  };

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
    </div>
  );
}
