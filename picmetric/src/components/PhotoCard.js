import React from 'react';





const PhotoCard = (props) => {
    return (
        <div>
            <img className='card-img' src={props.url} alt={props.name}/>
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