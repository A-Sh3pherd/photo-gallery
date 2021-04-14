import React, {useState} from 'react'
import axios from "axios";
import {Button, Container, Form} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    //STATE STUFF
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondaryPassword, setSecondaryPassword] = useState('');
    const history = useHistory()

    //CSS

    async function signup() {
        if (password !== secondaryPassword) {
            alert('Passwords must match!')
        } else {
            const {data} = await axios.post('http://localhost:3005/signup', {
                username, email, password
            })
            if (data.message === 'User Created!') {
                alert(`User Created!`)
                history.push('/')
            } else {
                alert(data.message)
            }
        }

    }

    return (
        <div>
            <Container>
                <Form id='form-styles'>
                    <h2 className={'text-center'}>Signup</h2>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={e => setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' onChange={e => setPassword(e.target.value)}/>
                        <Form.Label>Re-Enter password</Form.Label>
                        <Form.Control type='password' onChange={e => setSecondaryPassword(e.target.value)}/>
                    </Form.Group>
                    <Button onClick={signup} type={'button'}>Signup</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Signup;