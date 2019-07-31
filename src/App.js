import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Login from './components/login/login'
import NavLoggedIn from './components/nav/navLoggedIn';
import Gallery from './components/gallery/gallery';
import CreateAcc from './components/createacc/createacc'
import Login from './components/login/login'
import EditProfile from './components/EditProfile'
import OtherUserInfoCard from './components/OtherUserInfoCard'
import OwnUserInfoCard from './components/OwnUserInforCard'


function App() {
  return (
    <div className="App">
      <NavLoggedIn />
      <Gallery />
      {/* <Nav /> */}
      <CreateAcc/>
      <Login/>
      <EditProfile />
      <OtherUserInfoCard />
      <OwnUserInfoCard />
    </div>
  );
}

export default App;
