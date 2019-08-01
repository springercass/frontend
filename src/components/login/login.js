import React, { useState, useEffect }  from 'react';
import { Form, Button } from 'semantic-ui-react'
import Axios from 'axios';
import GalleryPreview from '../GalleryPreview/GalleryPreview'
import NavLoggedIn from '../nav/navLoggedIn';
import Nav from '../nav/nav';
import './login.scss'

function Login(props) {
    useEffect(() => {
        localStorage.getItem('token') && localStorage.removeItem('token')
        localStorage.getItem('userID') && localStorage.removeItem('userID')
    },[])
   

    const [user, setUser] = useState({username: '', password: ''});

    const handleChanges = e => {
        setUser ({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const createButtonHandler = e => {
        e.preventDefault();
        props.history.push('/createacc')
    }
    const handleSubmit = e => {
        e.preventDefault();

        Axios
            .post('https://art-portfolio-be.herokuapp.com/api/auth/login', user)
            .then(
                res => {
                    console.log(res);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('userID', res.data.userID);
                    
                    setUser({
                        username: '',
                        password: ''
                    })
                    props.history.push(`/users/${localStorage.getItem('userID')}`);
                })


            .catch(err => { 
                console.log(err)
                setUser({
                    username: '',
                    password: ''
                })
                props.history.push('/login')
                alert('You do not have an account or you have entered an incorrect username/password; please try again or create an account')

            });
            
    }

    return (
        <div>
        {localStorage.getItem('token') ? <NavLoggedIn /> : <Nav />}

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
                        <input type="password" name='password' onChange={handleChanges} value={user.password} />
                    </Form.Field>
                    <Button className="form-button" type='submit'>Explore</Button>
                </Form>
                <div className="no-account">
                    <h3>No account yet?</h3>
                    <Button onClick={createButtonHandler} className="create">CREATE ACCOUNT</Button>
                </div>
            </div>
            <div className='gallery-container'>
                <GalleryPreview />
            </div>
        </div>
        </div>
    )

}


export default Login