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
      // console.log(data);
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
        style={{ fontSize: "48px", lineHeigh: "58px", marginTop: "44px" }}
      >
        Gallery
      </Header>
      <Container style={galleryContainer}>
        {activeImages.map(image => (
          <div>
            <Modal
              basic
              size="big"
              style={modalStyle}
              trigger={<Image style={imageStyle} src={image.url} />}
            >
              {/* <Modal.Header>Select a Photo</Modal.Header> */}
              <Image style={{ margin: "0px 0px" }} src={image.url} />
              <Modal.Content style={{ backgroundColor: "#D3D4DE" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Header
                    as="h5"
                    compact
                    style={{ margin: "0px", color: "#006FBB" }}
                  >
                    @{image.username}
                  </Header>
                  {/* TODO: Make above header a link to profile route */}
                  <Header
                    as="h5"
                    style={{
                      margin: "0px",
                      lineHeight: "20px",
                      color: "#000639"
                    }}
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
                <Modal.Description>
                  <p style={{ color: "black" }}>{image.description}</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
        ))}
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
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
const imageStyle = {
  overflow: "hidden",
  height: "336px",
  width: "336px",
  objectFit: "cover",
  margin: "22.5px 24px"
};

const modalStyle = {
  width: "auto",
  height: "auto",
  maxWidth: "1000px",
  objectFit: "contain"
  //   borderRadius: "0px"
};

export default Gallery;
