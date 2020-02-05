import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { Link } from 'react-router-dom';

const PhotoList = (props) => {
    const [photos, setPhotos] = useState({
        name: '',
        url: '',
        person: '',
        category: ''
    })
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
            {/* {photos.map(photo => (
                //map over photos to display cards
                    <Link to={`/`} key={photo.url}>
                        <PhotoCard 
                            url={photo.url}
                        />
                    </Link>
            ))} */}
            <div>PhotoList</div>
        </div>
    )
}

export default PhotoList;