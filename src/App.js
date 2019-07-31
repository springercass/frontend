import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Nav from './components/nav/nav';
import Login from './components/login/login'
import NavLoggedIn from './components/nav/navLoggedIn';
import Gallery from './components/gallery/gallery';
import CreateAcc from './components/createacc/createacc'
import EditProfile from './components/EditProfile'
import OtherUserInfoCard from './components/OtherUserInfoCard'
import OwnUserInfoCard from './components/OwnUserInforCard'

function App() {
  return (
    <Router>
      <div className="App">
        {localStorage.getItem('token') ? <NavLoggedIn /> : <Nav />}
        {/* <Gallery /> */}

        <Route exact path='/' component={Gallery} />
        <Route path='/login' component={Login} />
        <Route path='/createacc' component={CreateAcc} />
        {/* <Route path='/otheruserinfo' component={OtherUserInfoCard} /> */}
        <PrivateRoute path='/editprofile' component={EditProfile} />
        {/* <PrivateRoute path='/ownuserinfo' component={OwnUserInfoCard} /> */}
        
      
      </div>
    </Router>
  );
}

export default App;
