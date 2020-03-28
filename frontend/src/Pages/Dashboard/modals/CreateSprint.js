import React, { useState } from 'react';
import './style.css';
import API from '../../../Utilities/API';

export default function CreateSprint({ isOpen, toggle }) {
  const [name, setName] = useState(null);
  const [sprint, setSprint] = useState({
    name: null
  });
  const showHideClassName = isOpen
    ? 'modal display-block'
    : 'modal display-none';

  const formUpdate = (fieldName, value) => {
    let tempSprint = { ...sprint };
    tempSprint[fieldName] = value;

    setSprint(tempSprint);
  };

  const addSprint = () => {
    API.createSprint(sprint).then(res => {
      if (res.status == 200) {
        toggle();
      } else {
        return false;
      }
    });
  };

  return (
    <div className={showHideClassName}>
      <form
        id='form'
        className='form modal-main'
        onSubmit={e => e.preventDefault()}
      >
        <h2 data-test='header'>Create a Sprint</h2>
        <div className='form-control'>
          <label for='name' data-test='create-sprint-modal-label-name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter sprint name'
            name='name'
            data-test='create-sprint-modal-input-name'
            value={sprint.name}
            onChange={e => formUpdate(e.target.name, e.target.value)}
          />
          <small className='error' data-test='create-sprint-modal-error-name'>
            Error message
          </small>
        </div>

        <button
          type='submit'
          className='close'
          data-test='create-sprint-modal-submit-button'
          onClick={() => addSprint()}
        >
          Submit
        </button>
        <button
          type='cancel'
          className='close'
          data-test='create-sprint-modal-cancel-button'
          onClick={() => toggle()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
