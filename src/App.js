import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/login/login'
import Gallery from './components/gallery/gallery';
import CreateAcc from './components/createacc/createacc'
import EditProfile from './components/EditProfile'
import OtherUserInfoCard from './components/OtherUserInfoCard'
import OwnUserInfoCard from './components/OwnUserInforCard'
<<<<<<< HEAD
import NewPost from './components/NewPost'

=======
import ProfilePage from './components/profilePage/profilePage';
>>>>>>> c4eece4979a49e082da1b7cd3c0499a792667660

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Gallery} />
        <Route path='/login' component={Login} />
        <Route path='/createacc' component={CreateAcc} />
        <PrivateRoute path='/editprofile' component={EditProfile} />
<<<<<<< HEAD
        {/* <PrivateRoute path='/ownuserinfo' component={OwnUserInfoCard} /> */}
        
=======
        <Route path='/users/:id' render={props=><ProfilePage {...props}/>}/>
>>>>>>> c4eece4979a49e082da1b7cd3c0499a792667660
      </div>
    </Router>
  );
}

export default App;
