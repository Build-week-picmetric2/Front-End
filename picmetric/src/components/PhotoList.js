import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const PhotoList = (props) => {
    const [photos, setPhotos] = useState({
        photo: ''
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
                <PhotoCard
                    key={item.id} 
                    item={item.url}
                />
            ))} */}
            <div>PIC LIST</div>
        </div>
    )
}

export default PhotoList;