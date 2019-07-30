import React, { useState }  from 'react';
import { Form, Button } from 'semantic-ui-react'
import Axios from 'axios';

import './login.scss'

function Login(props) {

    const [user, setUser] = useState({username: '', password: ''});

    const handleChanges = e => {
        setUser ({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        Axios
            .post('https://art-portfolio-be.herokuapp.com/api/auth/login', user)
            .then(
                res => {
                    console.log(res);
                    localStorage.setItem('token', res.data.token)
                    setUser({
                        username: '',
                        password: ''
                    })
            
                })


            .catch(err => console.log(err))
    }

    return (

        <div className="login-container">
            <div className="form-container">
                <h1>Log In</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>User Name</label>
                        <input name='username' onChange={handleChanges} value={user.username} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input name='password' onChange={handleChanges} value={user.password} />
                        <a><h5>Forgot your password?</h5></a>
                    </Form.Field>
                    <Button className="form-button" type='submit'>Explore</Button>
                </Form>
                <div className="no-account">
                    <h3>No account yet?</h3>
                    <Button className="create">CREATE ACCOUNT</Button>
                </div>
            </div>
            <div>
                <h1>Gallery Preview goes here</h1>
            </div>
        </div>

    )

}


export default Login