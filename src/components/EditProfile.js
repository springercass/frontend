import React, { useState } from 'react'
import styled from 'styled-components'

const EditProfileContainer = styled.div`
    width: 1034px;
    height: 838px;
    background-color: #D3D4DE;
`

const LeftSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RightSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const StyledH1 = styled.h1`
    font-size: 2.5rem;
`

const UserImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const UserImage = styled.img`
    border-radius: 50%;
    height: 293px;
`

const UploadPhotoButton = styled.button`
    width: 255px;
    height: 52px;
    color: #5C6AC4;
    font-size: 1rem;
    // font-weight: bold;
    background-color: #F4F5FA;
    border: 2px solid #A1A9DD;
    margin-top: 30px;
`

const EditProfile = (props) => {
    
    const [formState, setFormState] = useState({
        name: '',
        username: '',
        emailaddress: '',
        bio: ''
    })

    const submitHandler = (event) => {
        event.preventDefault()
        // input axios put request
    }
}

return (
    <EditProfileContainer>
        <LeftSection>
            <StyledH1>Profile</StyledH1>
            <UserImageContainer>
                <UserImage src= "https://avatars1.githubusercontent.com/u/48461758?s=460&v=4" />
            </UserImageContainer>
            <UploadPhotoButton>UPLOAD PHOTO</UploadPhotoButton>
        </LeftSection>
        <RightSection>

        </RightSection>
    </EditProfileContainer>
)

export default EditProfile