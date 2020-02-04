import React, { useState, useEffect } from 'react';
import Registration from './Registration';

const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <h1>Status:</h1>
            <Registration />
        </div>
    )
}

export default Home;