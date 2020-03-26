import './style.css';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utilities/API';

export default function Registration() {
  const [user, setUser] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    passwordConfirmation: null
  });

  const userUpdate = (fieldName, value) => {
    let tempUser = { ...user };
    tempUser[fieldName] = value;

    setUser(tempUser);
  };

  const submitNewUser = user => {
    console.log('in it');
    API.createUser(user).then(res => {
      if (res) {
        console.log(res.data);
      }
    });
  };

  return (
    <div className='container'>
      <form id='form' className='form' onSubmit={e => e.preventDefault()}>
        <h2 data-test='header'>Register With Us</h2>
        <div className='form-control'>
          <label for='first-name' data-test='registration-label-first-name'>
            First Name
          </label>
          <input
            type='text'
            id='first-name'
            data-test='registration-input-first-name'
            placeholder='Enter first name'
            name='firstName'
            value={user.firstName}
            onChange={e => userUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='registration-error-first-name'>
            Error message
          </small>
        </div>
        <div className='form-control'>
          <label for='last-name' data-test='registration-label-last-name'>
            Last Name
          </label>
          <input
            type='text'
            id='last-name'
            data-test='registration-input-last-name'
            placeholder='Enter last name'
            name='lastName'
            value={user.lastName}
            onChange={e => userUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='registration-error-last-name'>
            Error message
          </small>
        </div>
        <div className='form-control'>
          <label for='email' data-test='registration-label-email'>
            Email
          </label>
          <input
            type='text'
            id='email'
            data-test='registration-input-email'
            placeholder='Enter email'
            name='email'
            value={user.email}
            onChange={e => userUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='registration-error-email'>
            Error message
          </small>
        </div>
        <div className='form-control'>
          <label for='password' data-test='registration-label-password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            data-test='registration-input-password'
            placeholder='Enter password'
            name='password'
            value={user.password}
            onChange={e => userUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='registration-error-password'>
            Error message
          </small>
        </div>
        <div className='form-control'>
          <label for='password2' data-test='registration-label-password2'>
            Confirm Password
          </label>
          <input
            type='password'
            id='password2'
            placeholder='Enter password again'
            data-test='registration-input-password2'
            name='passwordConfirmation'
            value={user.passwordConfirmation}
            onChange={e => userUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='registration-error-password2'>
            Error message
          </small>
        </div>
        <button
          type='submit'
          onClick={() => submitNewUser(user)}
          data-test='registration-submit-button'
        >
          Submit
        </button>
        <small>
          Already have an account? Login{' '}
          <Link to='/' data-test='registration-to-login'>
            here
          </Link>
          .
        </small>
      </form>
    </div>
  );
}
