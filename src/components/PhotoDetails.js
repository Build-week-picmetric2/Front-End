import React, { useState } from "react";
import { axiosWithAuth } from "axios";
import PhotoCard from "./PhotoCard";

const PhotoDetails = (props) => {
  
  const [ photo, setPhoto] = useState()

  // const fetchPhoto = image_id => {
  //   axiosWithAuth()
  //     .get(`api/photos/${image_id}`)
  //     .then(res => this.setState({ photo: res.data }))
  //     .catch(err => console.log(err.response));
  // };

  return (
    <div className="save-wrapper">
      <PhotoCard />
      <div className="save-button">
        Save
      </div>
    </div>
  );
}

export default PhotoDetails;
