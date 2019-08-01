import React, { useEffect, useState } from "react";
import OtherUserInfoCard from "../OtherUserInfoCard";
import OwnUserInfoCard from "../OwnUserInforCard";
import UserGallery from "../gallery/userGallery";
import { Container } from "semantic-ui-react";
import axios from "axios";

// Prop we'll need: a user's id, so we can make axios call and populate info cards with data (sending via more props).
function ProfilePage(props) {
  const loggedInUserID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");
  const id = props.match.params.id;
  console.log("id", id);
  console.log("props in profilePage", props);
  console.log('userID', loggedInUserID)
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://art-portfolio-be.herokuapp.com/api/users/${id}/`)
      .then(data => {
        console.log("response", data.data);
        setUser(data.data);
      });
  }, []);

  if (loggedInUserID === id){
      return (
        <div style={{ center }}>

            <OwnUserInfoCard
              id={loggedInUserID}
              username={user.username}
              firstName={user.first_name}
              lastName={user.last_name}
              bio={user.bio}
              profilePhoto={user.profilePhoto}
            />
         
          <UserGallery id={id} />
        </div>

      )
  } else {
      return (
        <div style={{ center }}>

            <OtherUserInfoCard
              id={id}
              username={user.username}
              firstName={user.first_name}
              lastName={user.last_name}
              bio={user.bio}
              profilePhoto={user.profilePhoto}
            />
          
          <UserGallery id={id} />
        </div>

      )
  }


//   return (
//     <div style={{ center }}>
//       {loggedInUserID ? (
//         <OwnUserInforCard
//           id={loggedInUserID}
//           username={user.username}
//           firstName={user.first_name}
//           lastName={user.last_name}
//           bio={user.bio}
//           profilePhoto={user.profilePhoto}
//         />
//       ) : (
//         <OtherUserInfoCard
//           id={id}
//           username={user.username}
//           firstName={user.first_name}
//           lastName={user.last_name}
//           bio={user.bio}
//           profilePhoto={user.profilePhoto}
//         />
//       )}
//       <UserGallery id={id} />
//     </div>
//   );
}

const center = {
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  backgroundColor: "#E5E5E5"
};

export default ProfilePage;
