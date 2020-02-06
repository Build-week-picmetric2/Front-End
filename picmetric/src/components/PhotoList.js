import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { connect } from 'react-redux'
import { deletePhoto, updatePhoto } from '../redux/actions';
import { Link } from 'react-router-dom';
import PhotoCard from './PhotoCard';
import styled from 'styled-components';

const PhotoListDiv = styled.div`
    padding-top: 1%;
    text-align: center;
    background-color: black;
    
`
const PhotoImg = styled.img`
    margin: 1%;
    border-radius: 1rem;
    width: 30%;
    
`
const H2 = styled.h2`
    font-family: 'Julius Sans One', sans-serif;
    color: #fbfbfb;
    
`
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
            <H2>Gallery</H2>
            {photos.map(photo => {
                return (
                <>
                <Link to={`/Dashboard/image/${photo.id}`} key={photo.url}>
                    <PhotoImg
                    src={photo.url}
                    alt={photo.name}
                    />
                </Link>
                <PhotoCard key={photo.url} photo={photo} delete={props.deletePhoto} upDate={props.updatePhoto}/>
                </>
                );
            })}
        </PhotoListDiv>
    )
}

const mapStateToProps = state => {
    return{
        ...state,
        photos: state.photos,
        isFetching: state.isFetching
    }
};

export default connect(mapStateToProps, { deletePhoto, updatePhoto }) (PhotoList);