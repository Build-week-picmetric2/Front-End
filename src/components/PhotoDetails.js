import React from "react";
import { PhotoImg } from './Styles';

const PhotoDetails = (props) => {
    return (
        <div className="save-wrapper">
            <PhotoImg
              src={props.url}
              alt={props.name}
            />
        </div>
    );
}

export default PhotoDetails;