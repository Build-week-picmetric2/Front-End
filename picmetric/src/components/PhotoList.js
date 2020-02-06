import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { connect } from 'react-redux'
import { deletePhoto, updatePhoto } from '../redux/actions';
import { Link } from 'react-router-dom';
import {PhotoListDiv, PhotoImg, ListContainer, StyledH2, StyledH3} from './Styles';

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
            
        <ListContainer>
            
            {photos.map(photo => {
                return (
                    <PhotoListDiv>
                        <Link to={`/Dashboard/image/${photo.id}`} key={photo.url}>
                            <PhotoImg
                            src={photo.url}
                            alt={photo.name}
                            />
                            <StyledH2>{photo.name}</StyledH2>
                            <StyledH3>{photo.category}</StyledH3>
                        </Link>
                        <PhotoCard key={photo.url} photo={photo} delete={props.deletePhoto} upDate={props.updatePhoto}/>
                    </PhotoListDiv>
                );
            
            })}
        </ListContainer>
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