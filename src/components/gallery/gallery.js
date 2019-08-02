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
import NavLoggedIn from '../nav/navLoggedIn';
import Nav from '../nav/nav';
import UpvoteButton from './upvoteButton';
import { Link } from 'react-router-dom'

function Gallery() {
  const [images, setImages] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [activeImages, setActiveImages] = useState([]);

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
    axios.get("https://art-portfolio-be.herokuapp.com/api/posts").then(data => {
      console.log(data);
      setImages(data.data);
      setActiveImages(paginate(data.data, 9, activePage));
      
    });
  }, []);

  useEffect(() => {
    setActiveImages(paginate(images, 9, activePage));
  }, [activePage]);


  return (
    <Container fluid>
      {localStorage.getItem('token') ? <NavLoggedIn /> : <Nav />}

      <Header
        textAlign="center"
        as="h1"
        style={headerStyle}
      >
        Gallery
      </Header>
      <Container style={galleryContainer}>
        {activeImages.map(image => (
          <div>
            <Modal
              basic
            //   size=""
              style={modalStyle}
              trigger={<Image style={imageStyle} src={image.url} />}
            >
              <Image style={{ margin: "0px 0px 0px 0px", width: "100%", backgroundColor: "white" }} src={image.url} />
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
                  {/* TODO: Make above header a link to profile route */}
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
              </Modal.Content>
            </Modal>
          </div>
        ))}
      </Container>
      <div
        style={buttonsStyle}
      >
        <Button compact style={{backgroundColor:"#D3D4DE"}} onClick={handlePageChangeLeft}>
          <Icon name="chevron left" />
        </Button>
        <div style={{ padding: "0px 20px" }}>{activePage}</div>
        <Button compact style={{backgroundColor:"#D3D4DE"}} onClick={handlePageChangeRight}>
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
    lineHeigh: "58px", 
    marginTop: "44px",
    backgroundColor: "#E5E5E5"
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
//   objectFit: "contain"
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
    alignItems: "center",
    padding: "20px 0px"
}

export default Gallery;
