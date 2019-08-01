import React from "react";
import { Link } from 'react-router-dom';
import { Container, Icon, Image, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import palette from './navImages/palette.png';
import SearchForm from './searchForm';

function NavLoggedIn () {
    
    const id = localStorage.getItem("userID")

    return(
        <Container fluid style={genNavStyle}>
        {/* <Icon name='edit' size='big'/> */}
            <div>
                <Link to='/' style={navStyle}>
                    <Image src={palette} height="52.5px" width="52.5px"/>
                    <Header as="h4" textAlign="left" style={{maxWidth:"20px", color: "white", margin: "0px"}}>Art Portfolio</Header>
                </Link>
            </div>
            <div style={navStyle}>
                <Link to={`/users/${id}`} style={{color: "white", margin: "0px 0px 0px 10px"}}>My Profile</Link>
                <Link to='/' style={{color: "white", margin: "0px 0px 0px 10px"}}>Gallery</Link>
                <Link to='/login' style={{color: "white", margin: "0px 0px 0px 10px"}}>Log Out</Link>
            </div>
        </Container>
    )
}

const navStyle={
    maxWidth: '1500px',
    height: '80px',
    // border: '1px solid blue'
    backgroundColor: '#202E78',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 30px 0px 17px',
    
}

const genNavStyle = {
    boxShadow: '0px 2.5px 5px 0px rgba(184,185,189,1)',
    maxWidth: '1500px',
    height: '80px',
    // border: '1px solid blue'
    backgroundColor: '#202E78',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 30px 0px 17px',
    marginBottom: '5px'
}

export default NavLoggedIn;