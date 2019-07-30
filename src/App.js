import React from 'react';
import './App.css';
import Nav from './components/nav';
import Login from './components/login/login'
import NavLoggedIn from './components/navLoggedIn';

function App() {
  return (
    <div className="App">
      <NavLoggedIn />
      <Login/>
    </div>
  );
}

export default App;
