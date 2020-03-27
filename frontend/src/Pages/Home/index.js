import './style.css';
import React from 'react';
import API from '../../Utilities/API';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={() => healthcheck()}>ping</button>
    </div>
  );
}
