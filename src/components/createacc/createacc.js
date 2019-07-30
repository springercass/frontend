import React from 'react';
import { Form, Button } from 'semantic-ui-react'

import './createacc.scss'

function CreateAcc() {

    return (

        <div className="create-container">
            <div className="form-container">
                <h1>Create Account</h1>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input/>
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <input/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email Address</label>
                        <input/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input/>
                    </Form.Field>
                    <Button className="form-button" type='submit'>Join Now</Button>
                </Form>
            </div>
            <div>
                <h1>Gallery Preview goes here</h1>
            </div>
        </div>

    )

}


export default CreateAcc