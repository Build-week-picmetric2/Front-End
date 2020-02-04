import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';

const Home = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <h1>Welcome</h1>
            <h1>Status:</h1>
            <div>
                {showLogin ? <Login setShowLogin={setShowLogin} /> : <Registration setShowLogin={setShowLogin} />}
            </div>
            
        </div>
    )
}

export default Home;