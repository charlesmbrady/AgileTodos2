import './style.css';
import React, { useState } from 'react';
import API from '../../Utilities/API';
import Sprint from '../../Components/Sprint/index.js';

export default function Dashboard() {
  const [sprints, setSprints] = useState([]);

  const maps = [{ name: 'alpha' }, { name: 'bravo' }, { name: 'charlie' }];

  return (
    <div className='Dashboard'>
      {/* This is the backlog */}
      <div className='sprint-list'>
        {maps.map((sprint, index) => (
          <Sprint key={index} sprint={sprint} />
        ))}
      </div>
      <div className='backlog todos'></div>
    </div>
  );
}
