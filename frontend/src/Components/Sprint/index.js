import './style.css';
import React from 'react';

export default function Sprint({ sprint }) {
  return (
    <div className='sprint todos'>
      <div>Sprint + {sprint.name}</div>
    </div>
  );
}
