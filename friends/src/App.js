import './App.css';

import { Route, Link, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';

import LoginForm from './components/forms/LoginForm';
import FriendsList from './components/FriendsList';

function App() {
  
  return (
    <div className="App">
      <Route exact path='/'>
        <LoginForm/>
      </Route>
      <PrivateRoute path='/friendslist' component={FriendsList}/>
    </div>
  );
}

export default App;
