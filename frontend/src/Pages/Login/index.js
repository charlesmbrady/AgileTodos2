import './style.css';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../../Utilities/API';

export default function Login() {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({
    email: null,
    password: null
  });

  const formUpdate = (fieldName, value) => {
    let tempUser = { ...user };
    tempUser[fieldName] = value;

    setUser(tempUser);
  };

  const authenticateUser = user => {
    console.log('in it');
    API.authenticate(user).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        setRedirect(true);
      }
    });
  };
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div className='container'>
      {renderRedirect()}
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
            name='firstName'
            value={user.firstName}
            onChange={e => formUpdate(e.target.name, e.target.value)}
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
            name='firstName'
            value={user.firstName}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='error-password'>
            Error message
          </small>
        </div>
        <button
          type='submit'
          data-test='submit-button'
          onClick={() => authenticateUser()}
        >
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
