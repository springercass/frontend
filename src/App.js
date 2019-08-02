import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/login/login'
import Gallery from './components/gallery/gallery';
import CreateAcc from './components/createacc/createacc'
import EditProfile from './components/EditProfile'
import OtherUserInfoCard from './components/OtherUserInfoCard'
import OwnUserInfoCard from './components/OwnUserInforCard'
import ProfilePage from './components/profilePage/profilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Gallery} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/createacc' component={CreateAcc} />
        <PrivateRoute exact path='/editprofile' component={EditProfile} />
        <Route exact path='/users/:id' render={props=><ProfilePage {...props}/>}/>
      </div>
    </Router>
  );
}

export default App;
