import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const FlexCenterMainContainer = styled.div`
    width: 1000px;
    height: 290px;
    display: flex;
`

const UserImageContainer = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
`
const UserImage = styled.img`
    border-radius: 50%;
    height: 190px;
`

const TextContainer = styled.div`
    width: 66%;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledHeader = styled.h1`
    color: #293846
`

const SettingsIcon = styled.div`
    background-color: #293846
    height: 33px;
    width: 33px;
`
const Name = styled.h2`
    color: #293846
    align-self: flex-start;
`

const Description = styled.p`
    color: #293846;
    align-self: flex-start;
`



const UserInfoCard = (props) => (
    <FlexCenterMainContainer>
        <UserImageContainer>
            <UserImage src= "https://avatars1.githubusercontent.com/u/48461758?s=460&v=4" />
        </UserImageContainer>
        <TextContainer>
            <HeaderContainer>
                <StyledHeader>Username</StyledHeader>
                <SettingsIcon />
            </HeaderContainer>
            <Name>Name</Name>
        </TextContainer>
    </FlexCenterMainContainer>
)

export default UserInfoCard