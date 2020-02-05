import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import Spinner from './Spinner';
import styled from 'styled-components';
import {RegisterDiv, StyledForm, StyledInput} from './Styles';


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
                        // history.push('/Error')
                    })
            }).catch(err => {
                console.log('registration error', err);
                // history.push('/Error')
            })
    }

        return (
            <RegisterDiv>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput 
                        type ='email' 
                        name='email' 
                        placeholder='Email' 
                        value={credentials.email} 
                        onChange={handleChange}
                        required
                    />
                    <StyledInput  
                        type ='password' 
                        name='password' 
                        placeholder='Password' 
                        value={credentials.password} 
                        onChange={handleChange}
                        required
                    />
                    <StyledInput 
                        type ='password' 
                        name='password_confirmation' 
                        placeholder='Password confirmation' 
                        value={credentials.password_confirmation} 
                        onChange={handleChange}
                        required
                    />
                    {
                        !!isLoading && <Spinner />
                    }
                    <button>Register</button>
                    <div>
                    {'Account Registered?'} <a style={{cursor: 'pointer', color: 'black', textDecoration: 'underline'}} onClick={ (e) => {props.setShowLogin(true)}}>Log in</a>
                    </div>
                </StyledForm>
            </RegisterDiv>
        );
    }

    export default Registration;