import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import {HOne, HFive, StyledPhotoButton, UploadPhotoLabel} from './Styles';
import Spinner from '../components/Spinner';




const UploadPhoto = (props) => {
    const [ photo, setPhoto] = useState({
        preview: '',
        raw: '',
        uploadResponse: ''
    })
    const [ uploading, setUploading ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', photo.raw )
        try {
            const res = await axiosWithAuth()
            .post('/api/photos', formData )
            setUploading(false)
            setPhoto({ ...photo, uploadResponse: res.data.message })
            console.log(res.data)
        } catch (err) {
            console.log(err.res.data)
        }
    }
    const handleChange = (e) => {
        // setUploading(false)
        setPhoto({
            ...photo,
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0],
        })
    }

    return(
        <div>
            {/* <HOne>Upload Photo</HOne> */}
            <UploadPhotoLabel htmlFor='upload-button'>
                {
                    photo.preview ? <img src={ photo.preview } width='300' height='250' alt='preview' /> : (
                        <div>
                            <span className="fa-stack fa-2x mt-3 mb-2">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-store fa-stack-1x fa-inverse"></i>
                            </span>
                            <HFive className="text-center">Add File</HFive>
                        </div>
                    )
                }
            </UploadPhotoLabel>
            <input 
                type='file'
                id='upload-button'
                style= {{ display: 'none' }}
                onChange={handleChange}
            />
            <br />
            <p>{photo.uploadResponse}</p>
            {
                !!uploading && <Spinner />
            }
            <StyledPhotoButton onClick={handleSubmit}>Upload Photo</StyledPhotoButton>
        </div>
    )
}

export default UploadPhoto;