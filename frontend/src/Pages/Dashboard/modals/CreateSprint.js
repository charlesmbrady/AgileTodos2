import React, { useState } from 'react';
import './style.css';
import API from '../../../utils/API';

export default function CreateSprint({ isOpen, toggle }) {
  const [name, setName] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const createSprint = () => {
    const sprint = {
      name,
      startDate,
      endDate
    };
    API.createSprint(sprint).then(sprintResponse => {
      if (sprintResponse.status === 200) {
        toggle();
      }
    });
  };

  return (
    <Modal
      className='my-modal'
      isOpen={isOpen}
      toggle={toggle}
      data-test='create-sprint-modal'
    >
      <ModalHeader className='my-modal' toggle={toggle}>
        Create Sprint
      </ModalHeader>
      <ModalBody className='my-modal'>
        <Form>
          <FormGroup>
            <Label for='subject'>Name</Label>
            <Input
              type='text'
              name='name'
              id='name'
              data-test='create-sprint-modal-input-name'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder=''
            />
          </FormGroup>

          <FormGroup>
            <Label for='startDate'>Start Date</Label>
            <Input
              type='date'
              name='startDate'
              id='startDate'
              data-test='create-sprint-modal-input-start-date'
              placeholder='date placeholder'
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='endDate'>End Date</Label>
            <Input
              type='date'
              name='endDate'
              id='endDate'
              data-test='create-sprint-modal-input-end-date'
              placeholder='date placeholder'
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter className='my-modal'>
        <Button
          color='primary'
          data-test='create-sprint-modal-submit-button'
          onClick={() => createSprint()}
        >
          Submit
        </Button>{' '}
        <Button
          color='secondary'
          data-test='create-sprint-modal-cancel-button'
          onClick={toggle}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
