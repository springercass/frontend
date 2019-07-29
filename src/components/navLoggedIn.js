import React from "react";
import { Link } from 'react-router-dom';
import { Container, Icon, Image, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import palette from '../navImages/palette.png';
import SearchForm from './searchForm';

function NavLoggedIn () {
    return(
        <Container style={navStyle}> {/*add 'fluid' to make so there is no max width (it will grow/shrink to fill its container)*/}
        {/* <Icon name='edit' size='big'/> */}
            <Link style={navStyle}>
                <Image src={palette} height="52.5px" width="52.5px"/>
                <Header as="h4" textAlign="left" style={{maxWidth:"20px", color: "white", margin: "0px"}}>Art Portfolio</Header>
            </Link>
            <SearchForm />
            <Link style={{color: "white", margin: "0px 30px 0px 0px"}}>Log Out</Link>
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
    padding: '0px 30px 0px 17px'
}

export default NavLoggedIn;