import React from 'react';
import UploadPhoto from './components/UploadPhoto';
import PhotoList from './components/PhotoList';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <UploadPhoto />
            <PhotoList />
        </div>
    )
}

export default Dashboard;