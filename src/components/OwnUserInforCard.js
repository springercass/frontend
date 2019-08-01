import React from 'react'
// import { Container, Header, Image } from 'semantic-ui-react'
import { Container, Header, Image, Button, Icon, Modal } from 'semantic-ui-react'
import styled from 'styled-components'
import NewPost from './NewPost'
import { Link } from 'react-router-dom'

const UserInfoContainer = styled.div`
    width: 1291px;
    height: 393px;
    border-bottom: 2px solid #777798;
    display: flex;
    margin-bottom: 60px;
    margin: 0px auto 60px auto;
    background-color: #E5E5E5;
`

const UserImage = styled.img`
    width: 293px;
    height: 293px;
    border-radius: 50%;
`

const LeftContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RightContainer = styled.div`
    width: 66%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EditProfileButton = styled.button`
    width: 222px;
    height: 48px;
    background-color: #5C6AC4;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
        color: #5C6AC4;
        background-color: white;
        border: 2px solid #5C6AC4;
    }    
`

const NewPostButton = styled.button`
    width: 222px;
    height: 48px;
    background-color: #176EBB;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        color: #176EBB;
        background-color: white;
        border: 2px solid #176EBB;
    }    
`

const StyledUsername = styled.h1`
    color: #000639;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    font-size: 2.5rem;
    font-weight: 500;
`

const StyledName = styled.p`
    color: #000639;
    margin: 0;
    padding: 0;
    font-style: italic
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 10px;
`

const StyledEmail = styled.p`
    color: #5C6AC4;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 10px;
    text-decoration: underline;
    cursor: pointer;
`

const StyledBio = styled.p`
    color: #262E49;
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 1.2rem;
`

const RightLeftHalfCont = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5%;
`

const RightRightHalfCont = styled.div`
    width: 40%;
`

const StyledModalContainer = styled.div`
    height: 870px;
    width: 821px;
    background-color: #777798;
`

const OwnUserInfoCard = (props) => (
   <UserInfoContainer>
        <LeftContainer>
            <UserImage src={props.profilePhoto}/>
        </LeftContainer>
        <RightContainer>
            <RightLeftHalfCont>
                <StyledUsername>{props.username}</StyledUsername>
                <StyledName>{props.firstName}{' '}{props.lastName}</StyledName>
                <StyledEmail>{props.email}</StyledEmail>
                <StyledBio>{props.bio}</StyledBio>
            </RightLeftHalfCont>
            <RightRightHalfCont>
                <Link to="/editprofile"><EditProfileButton >Edit Profile</EditProfileButton></Link>
                <Modal trigger={<NewPostButton>New Post</NewPostButton>} closeIcon={{ style: { top: '30px', right: '50px' }, name: 'close' }} basic size='small' >
                    <Modal.Content >
                        <NewPost />
                    </Modal.Content>
                </Modal>
            </RightRightHalfCont>
        </RightContainer>
   </UserInfoContainer>
)

export default OwnUserInfoCard