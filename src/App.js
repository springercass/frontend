import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/login/login'
import Gallery from './components/gallery/gallery';
import CreateAcc from './components/createacc/createacc'
import EditProfile from './components/EditProfile'


function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path='/' component={Gallery} />
        <Route path='/login' component={Login} />
        <Route path='/createacc' component={CreateAcc} />
        <PrivateRoute path='/editprofile' component={EditProfile} />
        
      
      </div>
    </Router>
  );
}

export default App;
