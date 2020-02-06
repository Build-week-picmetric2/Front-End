import React, { useState } from 'react';
import { StyledH3 } from './Styles';

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
            <button onClick={toggleEdit}>Edit Title</button>
            <button onClick={()=> props.delete(props.photo)}>Delete Photo</button>
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
                <button>Finish Editing</button>{''}
            </form>                
            ) : null}
        </div>
    );
};

export default PhotoCard;