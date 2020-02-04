import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const UploadPhoto = (props) => {
    const [ photo, setPhoto] = useState({
        url: ''
    })
    const [ uploading, setUploading ] = useState(false)

    const handleSubmit = (e) => {
        axiosWithAuth()
            .post('/api/photos', photo)
    }
    const handleChange = (e) => {
        setUploading(false)
        setPhoto({
            url: ''
        })
    }
    return(
        <div>
            <h1>Upload </h1>
            <input 
                onChange={handleChange}
            />
            <button>Add Photo</button>
        </div>
    )
}

export default UploadPhoto;