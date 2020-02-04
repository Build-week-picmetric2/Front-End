import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import styled from 'styled-components';
import Registration from './components/Registration';
import Login from './components/Login';


const Header = styled.h1`
    display: flex;
    justify-content: center;

`

const Home = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <Header>Welcome to PicMetric</Header>
            
            <div>
                {showLogin ? <Login setShowLogin={setShowLogin} /> : <Registration setShowLogin={setShowLogin} />}
            </div>
            
        </div>
    )
}

export default Home;