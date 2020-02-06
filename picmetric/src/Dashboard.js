import React from 'react';
import UploadPhoto from './components/UploadPhoto';
import PhotoList from './components/PhotoList';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
    font-family: 'Julius Sans One', sans-serif;
`

const Dashboard = () => {
    return (
        <div>
            <H1>Dashboard</H1>
            <UploadPhoto />
            <PhotoList />
        </div>
    )
}

export default Dashboard;