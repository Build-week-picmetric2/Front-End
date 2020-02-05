import React from 'react';

const PhotoCard = (props) => {
    return (
        <div>
            <img className='card-img' src={props.photo.url} alt={props.photo.name}/>
            <div>
                <form>
                    <input 
                        type='text'
                        placeholder='Title'
                    />
                </form>
            </div>
        </div>
    )
}

export default PhotoCard;