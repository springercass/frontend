import React from 'react';
import './App.css';
import Nav from './components/nav';


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
