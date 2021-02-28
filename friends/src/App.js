import './App.css';

import { Route, Link, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';

import LoginForm from './components/forms/LoginForm';
import AddFriendForm from './components/forms/AddFriendForm';
import EditFriendForm from './components/forms/EditFriendForm';
import DeleteFriendForm from './components/forms/DeleteFriend';

import FriendsList from './components/FriendsList';

function App() {
  
  return (
    <div className="App">
      <Route exact path='/'>
        <LoginForm/>
      </Route>
      <PrivateRoute path='/friendslist' component={FriendsList}/>
      <PrivateRoute path='/addfriend' component={AddFriendForm}/>
      <PrivateRoute path='/editfriend' component={EditFriendForm}/>
      <PrivateRoute path='/deletefriend' component={DeleteFriendForm}/>
    </div>
  );
}

export default App;
