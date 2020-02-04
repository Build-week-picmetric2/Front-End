import React, { useState } from 'react';
import axios from 'axios';


const Registration = () => {
    const [ user, setUser ] = useState({
        user: {
            email: '',
            password: '',
            password_confirmation: ''
        }
    })
    const [ isLoading, setIsLoading ] = useState(false);

    const handleChange = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)
        axios.post('https://picmetric-demo.herokuapp.com/api/register',{
        }, {withCredentials: true}
        ).then(response =>{
            console.log('registration res', response);
        }).catch(error => {
            console.log('registration error', error);
        })
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                
                    <input 
                        type ='email' 
                        name='email' 
                        placeholder='Email' 
                        value={user.email} 
                        onChange={handleChange}
                        required
                    />

                    <input 
                        type ='password' 
                        name='password' 
                        placeholder='Password' 
                        value={user.password} 
                        onChange={handleChange}
                        required
                    />

                    <input 
                        type ='password' 
                        name='password_confirmation' 
                        placeholder='Password confirmation' 
                        value={user.password_confirmation} 
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