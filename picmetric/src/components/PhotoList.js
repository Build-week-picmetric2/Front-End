import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { Link } from 'react-router-dom';
import {PhotoListDiv, PhotoImg, HTwo} from './Styles';


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
    },[setPhotos])
    return (
        <PhotoListDiv>
            <HTwo>Gallery</HTwo>
            {photos.map(photo => {
                return (
                    <>
                        <Link to={`/Dashboard/image/${photo.id}`} key={photo.url}>
                            <img
                            src={photo.url}
                            alt={photo.name}
                            />
                        </Link>
                        <h2>{photo.name}</h2>
                        <h3>{photo.category}</h3>
                    </>
                );
            })}
        </PhotoListDiv>
    )
}

export default PhotoList;