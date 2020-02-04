import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { useHistory } from 'react-router-dom';



const Registration = (props) => {
    const [ credentials, setCredentials ] = useState({
        user: {
            email: '',
            username: '',
            password: '',
            password_confirmation: ''
        }
    })
    const [ isLoading, setIsLoading ] = useState(false);
    const history = useHistory();

    const handleChange = (event) => {
        setCredentials({
            ...credentials, [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)
        axiosWithAuth()
            .post('/api/register', credentials)
            // {}, {withCredentials: true}
            .then(res => {
                setIsLoading(true)
                console.log('registration res', res);
                axiosWithAuth()
                    .post('/api/login', { username: credentials.username, password: credentials.password })
                    .then(res => {
                        console.log('login successful', res.data.message)
                        localStorage.setItem('token', res.data.token)
                        history.push('/Dashboard')
                    }) 
                    .catch(err => {
                        console.log(err)
                        history.push('/')
                    })
            }).catch(err => {
                console.log('registration error', err);
                history.push('/')
            })
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type ='email' 
                        name='email' 
                        placeholder='Email' 
                        value={props.email} 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type ='text' 
                        name='username' 
                        placeholder='Username' 
                        value={props.username} 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type ='password' 
                        name='password' 
                        placeholder='Password' 
                        value={props.password} 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type ='password' 
                        name='password_confirmation' 
                        placeholder='Password confirmation' 
                        value={props.password_confirmation} 
                        onChange={handleChange}
                        required
                    />
                    {
                        !!isLoading && <div>loading...</div>
                    }
                    <button>Register</button>
                </form>
            </div>
        );
    }

    export default Registration;