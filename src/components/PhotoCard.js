import React, { useState } from 'react';
import { StyledH3, PhotoCardButton } from './Styles';

const PhotoCard = (props) => {
    const [photo, editPhoto] = useState(props.photo);
    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        setEdit(!edit)
    };
    const editPhotoHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        editPhoto({ ...photo, [name]: value})
    }
    return (
        <div>
            <StyledH3>{props.photo.name}</StyledH3>
            <p style={{color:'white'}}>{props.photo.description}</p>
            <PhotoCardButton onClick={toggleEdit}>Edit Title</PhotoCardButton>
            <PhotoCardButton onClick={()=> props.delete(props.photo)}>Delete Photo</PhotoCardButton>
            {edit ? (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    props.upDate(photo);
                    toggleEdit();
                }}
            >
                <input 
                    type='text'
                    name='name'
                    value={photo.name}
                    onChange={e => editPhotoHandler(e)}
                    placeholder='title'
                />
                <button>Save</button>{''}
            </form>                
            ) : null}
        </div>
    );
};

export default PhotoCard;