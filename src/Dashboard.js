import React from 'react';
import UploadPhoto from './components/UploadPhoto';
import PhotoList from './components/PhotoList';
import {DashboardH1} from './components/Styles';



const Dashboard = () => {
    return (
        <div>
            <DashboardH1>Dashboard</DashboardH1>
            <UploadPhoto />
            <DashboardH1>Gallery</DashboardH1>
            <PhotoList />
        </div>
    )
}

export default Dashboard;