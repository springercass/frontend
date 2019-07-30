import React, { useState, useEffect } from "react";
import { Container, Image, Header, Modal } from "semantic-ui-react";
import axios from "axios";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://art-portfolio-be.herokuapp.com/api/images")
      .then(data => {
        console.log(data);
        setImages(data.data);
      });
  }, []);

  return (
    <Container fluid>
      <Header
        textAlign="center"
        as="h1"
        style={{ fontSize: "48px", lineHeigh: "58px", marginTop: "44px" }}
      >
        Gallery
      </Header>
      <Container style={galleryContainer}>
        {images.map(image => (
          <div>
            <Modal trigger={<Image style={imageStyle} src={image.url} size="medium" />}>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size="medium"
                  src="/images/avatar/large/rachel.png"
                />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
        ))}
      </Container>
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

export default Gallery;
