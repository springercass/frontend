import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
    width: 95%;
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
    width: 95%;
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

    :hover {
        color: #5C6AC4;
        background-color: white;
        border: 2px solid #5C6AC4;
    }    
`

const EditProfile = (props) => {
    
    const [formState, setFormState] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        bio: ''
    })

    const [userInfo, setUserInfo] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        bio: ''
    })

    // const userID = localStorage.getItem("")
    // const userID = 1

    // useEffect(() => {
    //         axios
    //             .put(`https://art-portfolio-be.herokuapp.com/api/users/${userID}`, userInfo)
    //             .then(response => {
    //                 console.log('made api call', response)
    //             })
    //             .catch( err => {
    //                 console.log('axios error editing user profile', userInfo)
    //             })
    //     }, [userInfo])

    const submitHandler = (event) => {
        event.preventDefault()
        setUserInfo(formState)
        console.log('userInfo', userInfo)
    }

    // console.log(formState)

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
                    First Name
                    <FormInput 
                        name="first_name"
                        value={formState.first_name}
                        onChange={event => {
                        // hook ensures rest of formStates object remains the same, only changes key value pair after ','
                        setFormState({ ...formState, first_name: event.target.value})
                        }}
                    />
                </ FormLabel>
                <FormLabel>
                    Last Name
                    <FormInput 
                        name="last_name"
                        value={formState.last_name}
                        onChange={event => {
                        // hook ensures rest of formStates object remains the same, only changes key value pair after ','
                        setFormState({ ...formState, last_name: event.target.value})
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
                        name="email"
                        value={formState.email}
                        onChange={event => {
                        // hook ensures rest of formStates object remains the same, only changes key value pair after ','
                        setFormState({ ...formState, email: event.target.value})
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