import React from 'react';
import './App.css';
import Nav from './components/nav';
import NavLoggedIn from './components/navLoggedIn';

function App() {
  return (
    <div className="App">
      <NavLoggedIn />
    </div>
  );
}

export default App;
