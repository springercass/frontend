import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Header,
  Modal,
  Button,
  Icon
} from "semantic-ui-react";
import axios from "axios";
import UpvoteButton from './upvoteButton';
import {Link} from 'react-router-dom';

// nested modal start 

import styled from 'styled-components'

const StyledEditDescriptionButton = styled.button`
    width: 80px;
    height: 24px;
    color: #6E7ACB;
    border: 2px solid #6E7ACB;
    background-color: #F4F5FA;
    margin-top: 10px;
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

const DescriptionContainer = styled.div`
    height: 134px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F4F5FA
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

// nested modal end

function UserGallery(props) {
  const [images, setImages] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [activeImages, setActiveImages] = useState([]);

   // nested modual start

   const [buttonState, setButtonState] = useState('UPDATE DESCRIPTION')
   const [descriptionState, setDescriptionState] = useState({
     description: ''
   })
 
   const [postIdState, setPostIdState] = useState('')
   const [loggedInUser, setLoggedInUser] = useState('');

   const token = localStorage.getItem("token")
   const userID = localStorage.getItem("userID");

   useEffect(() => {
      axios
        .get(`https://art-portfolio-be.herokuapp.com/api/users/${userID}`)
        .then(res => {
          console.log('axios get user logged in', res.data)
          setLoggedInUser(res.data.username)
        })
        .catch(err => console.log(err))
   },[])



       // need to confirm button disply state, write ternary operator to control state ('none' or 'block') depending on if user is logged in
  //  const [buttonDisplayState, setButtonDisplayState] = useState('')
   let buttonDisplayState = '';
   const handleChanges = event => {
     setDescriptionState({ ...descriptionState, description: event.target.value})
     // setPostIdState()
     console.log('event target name', event.target.name)
     console.log(descriptionState)
     setPostIdState(event.target.name)
   }
 
   const editDescriptionHandler = (event) => {
     event.preventDefault()
     
       axios
         .put(`https://art-portfolio-be.herokuapp.com/api/posts/${postIdState}`, descriptionState, {
             headers: {Authorization: token}
         })
         .then(response => {
             console.log('made api put to update description', response)
             setDescriptionState({
                 description: ''
             })
             setButtonState('UPDATED')
         })
         .catch( err => {
             console.log('axios error editing description')
         })
   }
 
   // nested modal end

  //   Function for returning slices of array, based on number of images per page (n), and which page we're on (page).
  function paginate(array, n, page) {
    if (page === 1) {
      return array.slice(0, n);
    } else {
      return array.slice((page - 1) * n, page * n);
    }
  }

  //   Functions to page right and left:
  const handlePageChangeRight = e => {
    if (activePage > images.length / 9) {
      setActivePage(activePage);
    } else {
      setActivePage(activePage + 1);
    }
    // console.log("event", e);
    // console.log("active page after right button:", activePage);
  };
  const handlePageChangeLeft = e => {
    if (activePage === 1) {
      setActivePage(activePage);
    } else {
      setActivePage(activePage - 1);
    }
  };

  useEffect(() => {
    axios.get(`https://art-portfolio-be.herokuapp.com/api/users/${props.id}/posts`).then(data => {
      console.log(data.data);
      setImages(data.data);
      setActiveImages(paginate(data.data.reverse(), 9, activePage));
      setButtonState('UPDATE DESCRIPTION')
    });
  }, [buttonState, props.id]);

  useEffect(() => {
    setActiveImages(paginate(images, 9, activePage));
  }, [activePage, buttonState]);

  return (
    <Container fluid>
      <Container style={galleryContainer}>
        {activeImages.map(image => (
          <div>
            <Modal
              basic
              size="large"
              style={modalStyle}
              trigger={<Image style={imageStyle} src={image.url} />}
            >
              <Image style={{ margin: "0px 0px",  width: "100%", backgroundColor: "white"}} src={image.url} />
              <Modal.Content style={{ backgroundColor: "#D3D4DE" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                <Link to={`/users/${image.userID}`}>
                  <Header
                    as="h5"
                    compact
                    style={usernameStyle}
                  >
                    @{image.username}
                  </Header>
                </Link>
                  <Header
                    as="h5"
                    style={dateStyle}
                  >
                    {Date(image.createdAt)
                      .toString()
                      .slice(3, 10) +
                      "," +
                      Date(image.createdAt)
                        .toString()
                        .slice(10, 15)}
                  </Header>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <Modal.Description>
                  <p style={{ color: "black" }}>{image.description}</p>
                </Modal.Description>
                <UpvoteButton image={image}/>
                </div>
                    {/* Nested Modal Start */}
                      
                    <span style={{color: "#d3d4dd" }}>{loggedInUser === image.username ? buttonDisplayState = "block" : buttonDisplayState = "none" }</span>
                    {/* {console.log('BUTTON DISPLAY STATE', buttonDisplayState)} */}
                    <Modal 
                      // button can be displayed/not depending on if user is logged in - need to write ternary operator, and state hook for 'buttonDisplayState' or alternative solution needed
                      trigger={<StyledEditDescriptionButton style={{display: `${buttonDisplayState}`}}>Edit</StyledEditDescriptionButton>}
                        content={
                                  <DescriptionContainer>
                                    <PostDescriptionInput 
                                        name={image.id}
                                        placeholder={image.description}
                                        value={descriptionState.description}
                                        onChange={handleChanges}
                                    />
                                    <SavePostButton onClick={editDescriptionHandler}>{buttonState}</SavePostButton>
                                  </DescriptionContainer>
                        }
                    />

                   {/* Nested Modal End */}

              </Modal.Content>
            </Modal>
          </div>
        ))}
      </Container>
      <div
        style={buttonsStyle}
      >
        <Button compact onClick={handlePageChangeLeft}>
          <Icon name="chevron left" />
        </Button>
        <div style={{ padding: "0px 20px" }}>{activePage}</div>
        <Button compact onClick={handlePageChangeRight}>
          <Icon name="chevron right" />
        </Button>
      </div>
    </Container>
  );
}

const galleryContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "1500px"
};

const headerStyle = { 
    fontSize: "48px", 
    lineHeight: "58px", 
    marginTop: "44px" 
}

const imageStyle = {
  overflow: "hidden",
  height: "336px",
  width: "336px",
  objectFit: "cover",
  margin: "22.5px 24px",
  backgroundColor: "white"
};

const modalStyle = {
  width: "auto",
  height: "auto",
  maxWidth: "1000px",
  objectFit: "contain"
  //   borderRadius: "0px"
};

const usernameStyle = {
    margin: "0px", 
    color: "#006FBB"
}

const dateStyle = {
    margin: "0px",
    lineHeight: "20px",
    color: "#000639"
}

const buttonsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default UserGallery;
