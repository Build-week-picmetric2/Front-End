import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { Link } from 'react-router-dom';

const PhotoList = (props) => {
    const [photos, setPhotos] = useState([])
    useEffect(()=> {
        axiosWithAuth()
        .get('/api/photos')
        .then(res => {
            console.log(res.data)
            setPhotos(res.data)
        })
        .catch(err => {
            console.log(err.res.data)
        })
    },[])
    return (
        <div>
            <h2>Gallery</h2>
            {photos.map(photo => {
                return (
                <Link to={`/Dashboard/image/${photo.id}`} key={photo.url}>
                    <img
                    src={photo.url}
                    alt={photo.name}
                    />
                </Link>
                );
            })}
        </div>
    )
}

export default PhotoList;