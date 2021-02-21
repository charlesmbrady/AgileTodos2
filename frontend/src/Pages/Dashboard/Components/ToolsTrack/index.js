import './style.css';
import React from 'react';
import API from '../../../../Utilities/API';

export default function ToolsTrack() {
  return (
    <div className='header-track'>
      <h4 className='track-title'>Dashboard</h4>
      <div className='track-item-container'>
        <button className='track-item'>Add Todo</button>
      </div>
      <div className='track-item-container'>
        <button className='track-item'>Add Sprint</button>
      </div>
    </div>
  );
}
