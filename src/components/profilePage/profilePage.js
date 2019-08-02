import React, { useEffect, useState } from "react";
import OtherUserInfoCard from "../OtherUserInfoCard";
import OwnUserInfoCard from "../OwnUserInforCard";
import UserGallery from "../gallery/userGallery";
import { Container } from "semantic-ui-react";
import axios from "axios";
import NavLoggedIn from '../nav/navLoggedIn';
import Nav from '../nav/nav';

// Prop we'll need: a user's id, so we can make axios call and populate info cards with data (sending via more props).
function ProfilePage(props) {
  const loggedInUserID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");
  const id = props.match.params.id;
//   console.log("id", id);
//   console.log("props in profilePage", props);
//   console.log('userID', loggedInUserID)
  const [user, setUser] = useState({});
  const [currentId, setCurrentId] = useState(id);

  useEffect(() => {
    axios
      .get(`https://art-portfolio-be.herokuapp.com/api/users/${id}/`)
      .then(data => {
        console.log("response", data.data);
        setUser(data.data);
        setCurrentId(id);
      });

  }, [id]);

  if (loggedInUserID === currentId){
      return (
        <div style={ center }>
            {localStorage.getItem('token') ? <NavLoggedIn /> : <Nav />}
            <OwnUserInfoCard
              id={loggedInUserID}
              username={user.username}
              firstName={user.first_name}
              lastName={user.last_name}
              bio={user.bio}
              profilePhoto={user.profilePhoto}
              email={user.email}
            />
         
          <UserGallery id={currentId} />
        </div>

      )
  } else {
      return (
        <div style={ center }>
            {localStorage.getItem('token') ? <NavLoggedIn /> : <Nav />}
            <OtherUserInfoCard
              id={id}
              username={user.username}
              firstName={user.first_name}
              lastName={user.last_name}
              bio={user.bio}
              profilePhoto={user.profilePhoto}
              email={user.email}
            />
          
          <UserGallery id={currentId} />
        </div>

      )
  }
}

const center = {
  backgroundColor: "#E5E5E5"
};

export default ProfilePage;
