import React, { useState }from 'react';
import { Form, Button } from 'semantic-ui-react'
import Axios from 'axios';
import GalleryPreview from "../GalleryPreview/GalleryPreview"
import NavLoggedIn from '../nav/navLoggedIn';
import Nav from '../nav/nav';

import './createacc.scss'



function CreateAcc(props) {
    const [newUser, setNewUser] = useState({username: '', password: '', first_name: '', last_name: '', email: '', bio: ''})
    
    const handleChanges = e => {
        setNewUser ({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(newUser);

        Axios
            .post('https://art-portfolio-be.herokuapp.com/api/auth/register', newUser)
            .then(res => { 
                console.log(res)
                setNewUser(
                    {username: '', 
                    password: '', 
                    first_name: '', 
                    last_name: '', 
                    email: '', 
                    bio: ''}
                )
            })
            .catch(err => console.log(err));
            props.history.push('/login');
    }
    return (
        <div>
            {localStorage.getItem('token') ? <NavLoggedIn /> : <Nav />}

        <div className="create-container">

            <div className="form-container">
                <h1>Create Account</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>First Name</label>
                        <input name='first_name' value={newUser.first_name} onChange={handleChanges} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input name='last_name' value={newUser.last_name} onChange={handleChanges} />
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <input name='username' value={newUser.username} onChange={handleChanges} />
                    </Form.Field>
                    <Form.Field>
                        <label>Email Address</label>
                        <input name='email' value={newUser.email} onChange={handleChanges} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input name='password'  value={newUser.password} onChange={handleChanges} />
                    </Form.Field>
                    <Button className="form-button" type='submit'>Join Now</Button>
                </Form>
            </div>
            <div className='gallery-container'>
                <GalleryPreview/>
            </div>
        </div>
        </div>

    )

}


export default CreateAcc