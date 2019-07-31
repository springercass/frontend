import React from 'react';
import './App.css';
import Nav from './components/nav';
import Login from './components/login/login'
import NavLoggedIn from './components/navLoggedIn';
import CreateAcc from './components/createacc/createacc'


function App() {
  return (
    <div className="App">
      <Nav/>
      <CreateAcc/>
      <Login/>
    </div>
  );
}

export default App;
