import React, { useState, useEffect } from "react";
import { Container, Image, Header } from "semantic-ui-react";
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
      <Header textAlign="center" as="h1" style={{fontSize:"48px", lineHeigh:"58px", marginTop:"44px"}}>Gallery</Header>
      <Container fluid style={galleryContainer}>
        {images.map(image => (
          <Image style={imageStyle} src={image.url} size="medium" />
        ))}
      </Container>
    </Container>
  );
}

const galleryContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "1500px"
};
const imageStyle = {
  overflow: "hidden",
  height: "336px",
  width: "336px",
  objectFit: "cover",
  margin: "22.5px 24px"
};

export default Gallery;
