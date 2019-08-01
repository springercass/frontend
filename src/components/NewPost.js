import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const SizedContainer = styled.div`
    height: 750px;
    width: 652px;
`

const UploadPhotoCont = styled.div`
    height: 616px;  
    width: 652px;
    background-color: #777798;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const UrlInput = styled.input`
    margin-top: 5px;
    width: 60%;
    height: 55px;
    border: 2px solid #777798;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 1.1rem;
    text-align: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
`

const UploadPhotoButton = styled.button`
    width: 196px;
    height: 73px;
    background-color: white;
    color: #000639;
    font-size: 1.2rem;
    margin-top: 10px;
    border-radius: 5px;
    border: 1.5px solid #000639;
    cursor: pointer;

    :hover {
        color: #176EBB;
        background-color: white;
        border: 2px solid #176EBB;
    }
`

const DescriptionContainer = styled.div`
    height: 134px;
    width: 652px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F4F5FA
`

const PostDescriptionInput = styled.textarea`
    width: 60%;
    height: 73px;
    border-radius: 5px;
    border: none;
    background-color: #D3D4DF;
    color: #000639;
    font-size: 1.1rem;
    padding: 2.5%;
    resize: none;
    line-height: 1.2;
`

const SavePostButton = styled.button`
    width: 30%;
    height: 73px;
    background-color: #176EBB;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        color: #176EBB;
        background-color: white;
        border: 2px solid #176EBB;
    }
`

const NewPost = (props) => {
    
    const [urlState, setUrlState] = useState('')
    // https://picsum.photos/id/879/1000
    const [buttonState, setButtonState] = useState('SAVE')
    const [formState, setFormState] = useState({
        url: '',
        description: ''
    })

    const userID = localStorage.getItem("userID")
    const token = localStorage.getItem("token")

    const handleChanges = event => {
        setFormState({ ...formState, [event.target.name]: event.target.value})
    }

    const uploadHandler = (event) => {

        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);
        const urlCheck = formState.url;

        if (urlCheck.match(regex)) {
            event.preventDefault()
            setUrlState(formState.url)
        } else {
            alert("URL Error");
        }
    }

    const savePostHandler = (event) => {
        event.preventDefault()
        
        if (urlState !== '') {

            axios
                .post(`https://art-portfolio-be.herokuapp.com/api/users/${userID}/posts`, formState, {
                    headers: {Authorization: token}
                })
                .then(response => {
                    console.log('made api post', response)
                    setFormState({
                        url: '',
                        description: ''
                    })
                    setUrlState('')
                    setButtonState('POST CREATED')
                    setUrlState('')
                })
                .catch( err => {
                    console.log('axios error creating new post')
                })
        } else {
            alert("No photo uploaded");
        }
    }

    console.log('formState', formState)
    console.log('urlState', urlState)

    return (

        <SizedContainer>
            <UploadPhotoCont style={{backgroundImage: `url(${urlState})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <UrlInput 
                    name="url"
                    placeholder='Enter image url'
                    value={formState.url}
                    onChange={handleChanges}
                />
                <UploadPhotoButton onClick={uploadHandler}>UPLOAD PHOTO</UploadPhotoButton>
            </UploadPhotoCont>
            <DescriptionContainer>
                <PostDescriptionInput 
                    name="description"
                    placeholder='Write caption here'
                    value={formState.description}
                    onChange={handleChanges}
                />
                <SavePostButton onClick={savePostHandler}>{buttonState}</SavePostButton>
            </DescriptionContainer>
        </SizedContainer>
    )
}
  
export default NewPost