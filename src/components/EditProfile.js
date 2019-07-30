import React, { useState } from 'react'
import styled from 'styled-components'

const EditProfileContainer = styled.div`
    width: 1034px;
    height: 838px;
    background-color: #D3D4DE;
    display: flex;
    box-shadow: 0px 2.5px 5px 0px rgba(184,185,189,1);
    margin-top: 60px;
    margin-bottom: 60px;
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
    border-radius: 5px;
    cursor: pointer;
`

const EditForm = styled.form`
    width: 377px;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    `

const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    font-weight: 600;
    justify-self: flex-start;
    text-align: left;
`

const FormInput = styled.input`
    margin-top: 5px;
    width: 375px;
    height: 55px;
    border: 2px solid #777798;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 1.1rem;
    padding-left: 2.5%;
    padding-right: 2.5%;
`

const FormBioInput = styled.textarea`
    margin-top: 5px;
    width: 375px;
    height: 162px;
    border: 2px solid #777798;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 1.1rem;
    padding: 2.5%;
`

const FormButton = styled.button`
    width: 375px;
    height: 52px;
    background-color: #5C6AC4;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0px 2.5px 5px 0px rgba(184,185,189,1);
    cursor: pointer;
`

const EditProfile = (props) => {
    
    
    const [formState, setFormState] = useState({
        name: '',
        username: '',
        emailAddress: '',
        password: '',
        bio: ''
    })

    const submitHandler = (event) => {
        event.preventDefault()
        console.log('form submit')
        // input axios put request
    }
    console.log(formState)
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
                <EditForm onSubmit={submitHandler}>
                <FormLabel>
                    Name
                <FormInput 
                     name="name"
                     value={formState.name}
                     onChange={event => {
                      // hook ensures rest of formStates object remains the same, only changes key value pair after ','
                     setFormState({ ...formState, name: event.target.value})
                    }}
                />
                </ FormLabel>
                <FormLabel>
                    Username
                <FormInput 
                     name="username"
                     value={formState.username}
                     onChange={event => {
                      // hook ensures rest of formStates object remains the same, only changes key value pair after ','
                     setFormState({ ...formState, username: event.target.value})
                    }}
                />
                </ FormLabel>
                <FormLabel>
                    Email Address
                <FormInput 
                     name="emailAddress"
                     value={formState.emailAddress}
                     onChange={event => {
                      // hook ensures rest of formStates object remains the same, only changes key value pair after ','
                     setFormState({ ...formState, emailAddress: event.target.value})
                    }}
                />
                </ FormLabel>
                <FormLabel>
                    Password
                <FormInput 
                     name="password"
                     value={formState.password}
                     onChange={event => {
                      // hook ensures rest of formStates object remains the same, only changes key value pair after ','
                     setFormState({ ...formState, password: event.target.value})
                    }}
                />
                </ FormLabel>
                <FormLabel>
                    Bio
                <FormBioInput 
                     name="bio"
                     value={formState.bio}
                     onChange={event => {
                      // hook ensures rest of formStates object remains the same, only changes key value pair after ','
                     setFormState({ ...formState, bio: event.target.value})
                    }}
                />
                </FormLabel>
                <FormButton>SAVE CHANGES</FormButton>
                </EditForm>
            </RightSection>
        </EditProfileContainer>
    )
}
export default EditProfile