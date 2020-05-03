import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utilities/API';

export default function HeaderTrack() {
  const title = 'AgileTodos';

  const activeSprint = (
    <Link className='nav-link' to='/active'>
      Active Sprint
    </Link>
  );
  const settings = (
    <Link className='nav-link' to='/settings'>
      Settings
    </Link>
  );
  const insights = (
    <Link className='nav-link' to='/insights'>
      Insights
    </Link>
  );

  const items = [activeSprint, settings, insights];

  return (
    <div className='header-track'>
      <h1 className='track-title'>{title}</h1>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div className='track-item-container'>
            <li className='track-item' key={i}>
              {item}
            </li>
          </div>
        ))}
    </div>
  );
}
