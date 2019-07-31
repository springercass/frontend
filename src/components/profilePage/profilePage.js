import React from 'react';
import OtherUserInfoCard from '../OtherUserInfoCard';
import OwnUserInforCard from '../OtherUserInfoCard';
import UserGallery from '../gallery/userGallery';
import { Container } from 'semantic-ui-react';


// Prop we'll need: a user's id, so we can make axios call and populate info cards with data (sending via more props). 
function ProfilePage (props){
    const userID = localStorage.getItem("userID")
    const token = localStorage.getItem("token")

    console.log('props in profilePage', props)

    return (
        <div style={{center}}>
            {localStorage.getItem('token') ? <OwnUserInforCard id={userID}/> : <OtherUserInfoCard id={props.match.params.id}/>}
            <UserGallery id={props.match.params.id}/>
        </div>
    )
}

const center = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export default ProfilePage;