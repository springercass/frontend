import React, { useState, useEffect } from "react";
import axios from "axios";
import { Label, Button, Icon } from "semantic-ui-react";

function UpvoteButton(props) {
  console.log("props in upvoteButton", props); // Getting image/post information, check. id will be props.image.id

  const postID = props.image.id;

  const [clicked, setClicked] = useState(false);
  const [likes, setLikes] = useState();

  useEffect(() => {
     axios.get(`https://art-portfolio-be.herokuapp.com/api/likes/posts/${postID}`) 
     .then(response=>{
         console.log('response', response)
         setLikes(response.data.likes)
     })
  }, [clicked]);

  useEffect(() => {
      axios.post()
    
  }, []);

  const clickHandler = event => {
    // alert("upvoted! (just kidding)");
    setClicked(true);
    setLikes(likes+1);
    console.log('likes, clicked', likes, clicked)
  };

  return (
    <div style={{ likeContainer }}>
      <Label>9 likes</Label>
      <Button onClick={clickHandler} circular icon>
        <Icon name="like" />
      </Button>
    </div>
  );
}

const likeContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100px"
};

export default UpvoteButton;
