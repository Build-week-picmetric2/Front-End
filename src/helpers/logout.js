import React from 'react'
import { Redirect } from 'react-router-dom';

export const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    return <Redirect to='/' />
}