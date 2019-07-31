import React from 'react';
import './App.css';
import Nav from './components/nav';
import Login from './components/login/login'
import NavLoggedIn from './components/navLoggedIn';
import CreateAcc from './components/createacc/createacc'
import EditProfile from './components/EditProfile'
import UserInfoCard from './components/UserInfoCard'

function App() {
  return (
    <div className="App">
      <Nav />
      <CreateAcc/>
      <Login/>
      <EditProfile />
      <UserInfoCard />
    </div>
  );
}

export default App;
