import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const UploadPhoto = (props) => {
    const [ photo, setPhoto] = useState({
        name: '',
        url: '',
        person: '',
        category: ''
    })
    // const [ uploading, setUploading ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', photo.url)
        const config = { headers: {'content-type': 'multipart/form-data' }}
        try {
            await axiosWithAuth()
            .post('/api/photos', {photo: photo.url}, config)
        } catch (err) {
            console.log(err.res)
        }
    }
    const handleChange = (e) => {
        // setUploading(false)
        setPhoto({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        })
    }
    return(
        <div>
            <h1>Upload </h1>
            <label htmlFor='upload-button'>
                {
                    photo.preview ? <img src={ photo.preview } width='300' height='250' alt='preview' /> : (
                        <>
                            <span className="fa-stack fa-2x mt-3 mb-2">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-store fa-stack-1x fa-inverse"></i>
                            </span>
                            <h5 className="text-center"> Upload your photo</h5>
                        </>
                    )
                }
            </label>
            <input 
                type='file'
                id='upload-button'
                style= {{ display: 'none' }}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleSubmit}>Add Photo</button>
        </div>
    )
}

export default UploadPhoto;