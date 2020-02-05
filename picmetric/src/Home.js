import React from 'react';
import Registration from './components/Registration';
import Login from './components/Login';

const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <h1>Status:</h1>
            <Login />
            <Registration />
        </div>
    )
}

export default Home;