import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Login from './components/login/login'
import NavLoggedIn from './components/nav/navLoggedIn';
import Gallery from './components/gallery/gallery';
import CreateAcc from './components/createacc/createacc'

function App() {
  return (
    <div className="App">
      <NavLoggedIn />
      <Gallery />
      {/* <Nav /> */}
      <CreateAcc/>
      <Login/>
    </div>
  );
}

export default App;
