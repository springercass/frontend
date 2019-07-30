import React from 'react';
import { Container, Icon, Image, Header, Form, Input, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function SearchForm () {
    return (
        <Form>
            <Input type="text" placeholder="Search" icon="search">
            </Input>
        </Form>
    )
}

export default SearchForm;