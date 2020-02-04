import React from 'react';

const PhotoCard = () => {
    return (
        <div>
            <span>Image</span>
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