// import './style.css';
// import React from 'react';
// import { FaTrashAlt, FaArrowUp } from 'react-icons/fa';
// // import _ from 'lodash';

// export default function Todo({ todo, removeTodo, editTodo }) {
//   return (
//     <div className='todo' data-test='todo' onClick={() => editTodo(todo)}>
//       <div className='type todo-item'>{todo.type}</div>
//       <div className='subject todo-item'>{todo.subject}</div>
//       <div className='points todo-item'>{todo.points}</div>
//       {todo.priority == 3 && (
//         <div className='priority todo-item'>
//           <FaArrowUp />
//           <FaArrowUp />
//           <FaArrowUp />
//         </div>
//       )}
//       {todo.priority == 2 && (
//         <div className='priority todo-item'>
//           <FaArrowUp />
//           <FaArrowUp />
//         </div>
//       )}
//       {todo.priority == 1 && (
//         <div className='priority todo-item'>
//           <FaArrowUp />
//         </div>
//       )}
//       <div className='remove todo-item'>
//         <FaTrashAlt
//           className='remove'
//           data-test='remove-todo-icon'
//           onClick={() => removeTodo(todo)}
//         />
//       </div>
//     </div>
//   );
// }
