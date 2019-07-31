import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Login from './components/login/login'
import NavLoggedIn from './components/nav/navLoggedIn';
import Gallery from './components/gallery/gallery';

function App() {
  return (
    <div className="App">
      <NavLoggedIn />
      {/* <Login/> */}
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
