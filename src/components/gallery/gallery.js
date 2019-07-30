import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
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
    <div>
        {images.map((image)=>{
            return(
                <div>
                    {/* <h3>{post.username}</h3> */}
                    <img src={image.url}/>
                </div>
            )
        })}
    </div>
  )
}

export default Gallery;
