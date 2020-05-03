import './style.css';
import React from 'react';
import API from '../../../../Utilities/API';

export default function SprintTrack({ sprint, index }) {
  const activateSprint = (sprint) => {
    sprint.status = 'active';
    API.updateSprint(sprint).then((res) => {
      if (res) {
        console.log('ok');
      }
    });
  };

  return (
    <div className='header-track'>
      <h6 className='track-title'>{sprint.name}</h6>
      {index == 0 && (
        // sprint.status != 'active'
        <button onClick={() => activateSprint(sprint)}>Start Sprint</button>
      )}
    </div>
  );
}
