import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import styled from 'styled-components';

const H5 =styled.h5`
    text-align: center;
    font-family: 'Julius Sans One', sans-serif;

`

const H1 = styled.h1`
    text-align: center;
    font-family: 'Julius Sans One', sans-serif;
`

const StyledButton = styled.button`
    font-family: 'Julius Sans One', sans-serif;
    display: block;
    background-color: black;
    cursor: pointer;
    height: 45px;
    font-size: 1rem;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    color: #fbfbfb;
    margin: 1.5rem auto;
    
    `

const UploadPhoto = (props) => {
    const [ photo, setPhoto] = useState({
        preview: '',
        raw: '',
        uploadResponse: ''
    })
    // const [ uploading, setUploading ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', photo.raw )
        try {
            const res = await axiosWithAuth()
            .post('/api/photos', formData )
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
            <H1>Upload Photo</H1>
            <label htmlFor='upload-button'>
                {
                    photo.preview ? <img src={ photo.preview } width='300' height='250' alt='preview' /> : (
                        <>
                            <span className="fa-stack fa-2x mt-3 mb-2">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-store fa-stack-1x fa-inverse"></i>
                            </span>
                            <H5 className="text-center">Add File</H5>
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
            <p>{photo.uploadResponse}</p>
            <StyledButton onClick={handleSubmit}>Add Photo</StyledButton>
        </div>
    )
}

export default UploadPhoto;