import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

//********** Pages/Components **********//
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import ActiveSprint from './Pages/ActiveSprint/index';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/registration' component={Registration}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/activesprint' component={ActiveSprint}></Route>

          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
