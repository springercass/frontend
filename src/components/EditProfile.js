import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NavLoggedIn from './nav/navLoggedIn';
import Nav from './nav/nav';

const EditProfileContainer = styled.div`
    width: 1034px;
    height: 838px;
    background-color: #D3D4DE;
    display: flex;
    box-shadow: 0px 2.5px 5px 0px rgba(184,185,189,1);
    margin: 60px auto 60px auto;
`

const LeftSection = styled.div`
    width: 50%;
    padding-top: 20px;
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
    font-size: 3.5rem;
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

    const [buttonState, setButtonState] = useState('SAVE CHANGES')

    const userID = localStorage.getItem("userID")
    const token = localStorage.getItem("token")

    const [imageUrlState, setUrlState] = useState('')

    useEffect(() => {
        axios
            .get(`https://art-portfolio-be.herokuapp.com/api/users/${userID}`)
            .then(response => {
                console.log('made api call', response)
                setUrlState(response.data.profilePhoto)
            })
            .catch( err => {
                console.log('axios error making profile url call')
            })
    }, [])

    const submitHandler = (event) => {
        event.preventDefault()

        axios
            .put(`https://art-portfolio-be.herokuapp.com/api/users/${userID}`, formState, {
                headers: {Authorization: token}
            })
            .then(response => {
                console.log('made api call', response)
                setFormState({
                    username: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    bio: ''
                })
                setButtonState('PROFILE UPDATED')
            })
            .catch( err => {
                console.log('axios error editing user profile')
            })
    }

    const handleChanges = event => {
        setFormState({ ...formState, [event.target.name]: event.target.value})
    }

    return (
        <div>
            {localStorage.getItem('token') ? <NavLoggedIn /> : <Nav />}

        <EditProfileContainer>

            <LeftSection>
                <StyledH1>Profile</StyledH1>
                <UserImageContainer>
                    <UserImage src= {imageUrlState} />
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
                            onChange={handleChanges}
                        />
                    </ FormLabel>
                    <FormLabel>
                        Last Name
                        <FormInput 
                            name="last_name"
                            value={formState.last_name}
                            onChange={handleChanges}
                        />
                    </ FormLabel>
                    <FormLabel>
                        Username
                        <FormInput 
                            name="username"
                            value={formState.username}
                            onChange={handleChanges}
                        />
                    </ FormLabel>
                    <FormLabel>
                        Email Address
                        <FormInput 
                            name="email"
                            value={formState.email}
                            onChange={handleChanges}
                        />
                    </ FormLabel>
                    <FormLabel>
                        Bio
                        <FormBioInput 
                            name="bio"
                            value={formState.bio}
                            onChange={handleChanges}
                        />
                    </FormLabel>
                    <FormButton>{buttonState}</FormButton>
                </EditForm>
            </RightSection>
        </EditProfileContainer>
        </div>
    )
}

export default EditProfile