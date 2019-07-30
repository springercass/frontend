import React from 'react';
import { Form, Button } from 'semantic-ui-react'

import './login.scss'

function Login() {

    return (

        <div className="login-container">
            <div className="form-container">
                <h1>Log In</h1>
                <Form>
                    <Form.Field>
                        <label>Email Address</label>
                        <input/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input/>
                        <a><h5>Forgot your password?</h5></a>
                    </Form.Field>
                    <Button type='submit'>Explore</Button>
                </Form>
                <div className="no-account">
                    <h3>No account yet?</h3>
                    <a>CREATE ACCOUNT</a>
                </div>
            </div>
            <div>
                <h1>Gallery Preview goes here</h1>
            </div>
        </div>

    )

}


export default Login