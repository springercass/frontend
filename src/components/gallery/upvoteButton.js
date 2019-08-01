import React, { useState, useEffect } from "react";
import axios from "axios";
import { Label, Button, Icon } from "semantic-ui-react";

function UpvoteButton(props) {
  console.log("props in upvoteButton", props); // Getting image/post information

  const postID = props.image.id;
  const userID = localStorage.getItem("userID")
  const token = localStorage.getItem("token")

  const [clicked, setClicked] = useState(false);
  const [likes, setLikes] = useState();
  const [like, setLike] = useState({})

  useEffect(() => {
     axios.get(`https://art-portfolio-be.herokuapp.com/api/likes/posts/${postID}`) 
     .then(response=>{
         setLikes(response.data.likes)
     })
  }, [clicked, like]);

  useEffect(()=>{
    axios.post(`https://art-portfolio-be.herokuapp.com/api/likes/posts/${postID}`, like, {
        headers: {Authorization: token}
    })
    .then(response => {
        console.log('posted to api', response)
        setClicked(true);
        setLike({})
    })
},[like])

  const clickHandler = event => {
    event.preventDefault()
    !clicked ? setLike({userID: userID, postID: postID}) : setLike({})
    console.log('likes, clicked', likes, clicked)
  };

  return (
    <div style={{ likeContainer }}>
      <Label>{likes} likes</Label>
      {token ? <Button onClick={clickHandler} circular icon>
        <Icon name="like" />
      </Button> : <div></div>}
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
