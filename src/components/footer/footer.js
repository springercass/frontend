import React from 'react';
import { Container } from 'semantic-ui-react';

function Footer(){
    return(
        <Container style={{backgroundColor: "#E5E5E5", padding:"50px 0px", width:"100%"}} textAlign="center">
            <a href="https://ecstatic-mcclintock-bb87d6.netlify.com/about">About Us</a>
            {/* <a href="">FAQ</a> */}
        </Container>
    )
}

export default Footer;