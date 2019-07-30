import React, { useState, useEffect } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import axios from "axios";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("https://art-portfolio-be.herokuapp.com/api/images").then(data => {
      console.log(data);
      setImages(data.data);
    });
  }, []);

  return (
    <Container style={galleryContainer}>
        {images.map((image)=>
            <Image style={imageStyle} src={image.url} size="medium"/>
            
        )}
    </Container>
  )
}

const galleryContainer = {
    display: 'flex',
    flexWrap: 'wrap'
}
const imageStyle = {
    overflow: 'hidden',
    height: '300px',
    width: '300px',
    objectFit: 'cover'
}

export default Gallery;
