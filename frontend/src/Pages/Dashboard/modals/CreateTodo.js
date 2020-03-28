// import React, { useState } from 'react';
// import './style.css';
// // import AUTH from "../../utils/AUTH";
// import API from '../../../Utilities/API';

// export default function CreateTodo({ isOpen, toggle }) {
//   const [subject, setSubject] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('');
//   const [points, setPoints] = useState(0);
//   const [sprint, setSprint] = useState(null);

//   const createTodo = () => {
//     const todo = {
//       subject,
//       description,
//       priority,
//       points
//     };
//     API.createTodo(todo).then(todoResponse => {
//       if (todoResponse.status === 200) {
//         toggle();
//       }
//     });
//   };

//   return (
//     <Modal>
//       <form id='form' className='form' onSubmit={e => e.preventDefault()}>
//         <h2 data-test='header'>Login</h2>
//         <div className='form-control'>
//           <label for='email' data-test='label-email'>
//             Email
//           </label>
//           <input
//             type='text'
//             id='email'
//             data-test='login-input-email'
//             placeholder='Enter email'
//             name='email'
//             value={user.email}
//             onChange={e => formUpdate(e.target.name, e.target.value)}
//           />
//           <small className='error' data-test='error-email'>
//             Error message
//           </small>
//         </div>
//         <div className='form-control'>
//           <label for='password' data-test='label-password'>
//             Password
//           </label>
//           <input
//             type='password'
//             id='password'
//             data-test='login-input-password'
//             placeholder='Enter password'
//             name='password'
//             value={user.password}
//             onChange={e => formUpdate(e.target.name, e.target.value)}
//           />
//           <small className='error' data-test='error-password'>
//             Error message
//           </small>
//         </div>
//         <button
//           type='submit'
//           data-test='login-submit-button'
//           onClick={() => authenticateUser(user)}
//         >
//           Submit
//         </button>
//         <small>
//           Don't have an account yet? Sign up{' '}
//           <Link to='/registration' data-test='login-to-registration'>
//             here
//           </Link>
//           .
//         </small>
//       </form>
//     </Modal>
//   );
// }
