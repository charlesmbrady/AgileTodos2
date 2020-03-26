import './style.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import API from '../../Utilities/API';

export default function Login() {
  return (
    <div className='container'>
      <form id='form' className='form'>
        <h2 data-test='header'>Login</h2>
        <div className='form-control'>
          <label for='email' data-test='label-email'>
            Email
          </label>
          <input
            type='text'
            id='email'
            data-test='input-email'
            placeholder='Enter email'
          />
          <small className='error' data-test='error-email'>
            Error message
          </small>
        </div>
        <div className='form-control'>
          <label for='password' data-test='label-password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            data-test='input-password'
            placeholder='Enter password'
          />
          <small className='error' data-test='error-password'>
            Error message
          </small>
        </div>
        <button type='submit' data-test='submit-button'>
          Submit
        </button>
        <small>
          Don't have an account yet? Sign up{' '}
          <Link to='/registration'>here</Link>.
        </small>
      </form>
    </div>
  );
}
