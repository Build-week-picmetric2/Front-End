import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const PhotoList = (props) => {
    const [photos, setPhotos] = useState({
        url: ''
    })
    useEffect(()=> {
        axiosWithAuth()
        .get('/api/photos')
        .then(res => {
            setPhotos({url:res})
        })
        .catch(err => {
            console.log(err)
        })
        return photos
    })
    return (
        <div>
            {photos.map((item) => (
                //map over photos to display cards
                <PhotoCard photos={item.photo}/>
            ))}
            <div>PIC LIST</div>
        </div>
    )
}

export default PhotoList;