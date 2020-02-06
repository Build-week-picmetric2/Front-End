
import React, { useState } from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import {Header} from './components/Styles';


const Home = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <Header>Welcome to PicMetric 2.0</Header>
            
            <div>
                {showLogin ? <Login setShowLogin={setShowLogin} /> : <Registration setShowLogin={setShowLogin} />}
            </div>
            
        </div>
    )
}

export default Home;