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
            console.log(res)
            setPhotos(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        return photos
    },[])
    return (
        <div>
            {/* {photos.map((item) => (
                //map over photos to display cards
                <div key='photo.id'>
                    <PhotoCard 
                        photos={item.url}
                    />
                </div>
            ))} */}
            <div>PIC LIST</div>
        </div>
    )
}

export default PhotoList;