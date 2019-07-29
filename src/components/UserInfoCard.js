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
`
const UserImage = styled.img`
    border-radius: 50%;
    height: 190px;
`

const TextContainer = styled.div`
    width: 66%;
    display: flex;
    flex-direction: column;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledHeader = styled(Header)`
    color: pink
`



const UserInfoCard = (props) => (
    <FlexCenterMainContainer>
        <UserImageContainer>
            <UserImage src= "https://avatars1.githubusercontent.com/u/48461758?s=460&v=4" />
        </UserImageContainer>
        <TextContainer>
            <HeaderContainer>

            </HeaderContainer>
        </TextContainer>
    </FlexCenterMainContainer>
)

export default UserInfoCard