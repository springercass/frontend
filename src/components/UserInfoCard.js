import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const UserInfoContainer = styled.div`
    width: 1291px;
    height: 393px;
    border-bottom: 2px solid #777798;
    display: flex;
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
    // border: 2px solid pink;
`

const RightContainer = styled.div`
    width: 66%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // border: 2px solid gray;
`

const RightTopContainer = styled.div`
    height: 50%;
    display: flex;
    // border: 2px solid yellow;
`

const RightBottomContainer = styled.div`
    height: 50%;
    width: 75%;
    // border: 2px solid blue;
`

const RightTopLeftCont = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: flex-start;
    justify-content: center;
    // border: 2px solid green;
`

const RightTopRightCont = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MessageButton = styled.button`
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

const SubscribeButton = styled.button`
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
    font-size: 2.2rem;
    font-weight: 500;
`

const StyledName = styled.p`
    color: #000639;
    margin: 0;
    padding: 0;
    font-style: italic
    font-size: 1.1rem;
    font-weight: 500;
`

const StyledBio = styled.p`
    color: #262E49;
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 1.1rem;
    // font-weight: 500;
`

const UserInfoCard = (props) => (
   <UserInfoContainer>
        <LeftContainer>
            <UserImage src="https://avatars1.githubusercontent.com/u/48461758?s=460&v=4"/>
       </LeftContainer>
       <RightContainer>
            <RightTopContainer>
                <RightTopLeftCont>
                    <StyledUsername>Mo</StyledUsername>
                    <StyledName>Monique Soto</StyledName>
                </RightTopLeftCont>
                <RightTopRightCont>
                    <MessageButton>Message</MessageButton>
                    <SubscribeButton>Subscribe</SubscribeButton>
                </RightTopRightCont>
            </RightTopContainer>
            <RightBottomContainer>
                <StyledBio>My photos are taken from various places I have traveled to around the world. I shoot with a Sony A7 camera with a 35 mm f/2.8 lens. I enjoy shooting fuzzy creatures, nature, and sometimes myself.</StyledBio>
            </RightBottomContainer>
       </RightContainer>
   </UserInfoContainer>
)

export default UserInfoCard