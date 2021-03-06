//yarn add axios - done
import { axiosWithAuth } from '../../helpers/axiosWithAuth';

//get PHOTOS from database
export const FETCH_PHOTO_START = 'FETCH_PHOTO_START';
export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const FETCH_PHOTO_FAILURE = 'FETCH_PHOTO_FAILURE';

// get photo details from database
export const INSPECT_PHOTO_START = 'INSPECT_PHOTO_START';
export const INSPECT_PHOTO_SUCCESS = 'INSPECT_PHOTO_SUCCESS';
export const INSPECT_PHOTO_FAILURE = 'INSPECT_PHOTO_FAILURE';

//edit & delete PHOTOS
export const DELETE_PHOTO_START = 'DELETE_PHOTO_START';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const DELETE_PHOTO_FAILURE = 'DELETE_PHOTO_FAILURE';
export const UPDATE_PHOTO_START = 'UPDATE_PHOTO_START';
export const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';
export const UPDATE_PHOTO_FAILURE = 'UPDATE_PHOTO_FAILURE';


export const getPhotos = () => dispatch => {
    dispatch({ type: FETCH_PHOTO_START });
    axiosWithAuth()
        .get('/api/photos')
        .then(response => {
            console.log(response.data)
            dispatch({ type: FETCH_PHOTO_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: FETCH_PHOTO_FAILURE, payload: error.response})
        })
}

export const getDetails = (image_id) => dispatch => {
    dispatch({ type: INSPECT_PHOTO_START });
    axiosWithAuth()
        .get(`api/photos/${image_id}`)
        .then(response => {
            console.log(response.data)
            dispatch({ type: INSPECT_PHOTO_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: INSPECT_PHOTO_FAILURE, payload: error })
        })
};

export const deletePhoto = photo => {
    return dispatch => {
      dispatch({ type: DELETE_PHOTO_START });
      axiosWithAuth()
        .delete(`api/photos/${photo.image_id}`)
        .then(response => dispatch({ type: DELETE_PHOTO_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: DELETE_PHOTO_FAILURE, payload: error }));
    };
  };
  
  export const updatePhoto = photo => {
    return dispatch => {
      dispatch({ type: UPDATE_PHOTO_START });
      axiosWithAuth()
        .put(`api/photos/${photo.image_id}`, photo)
        .then(response => dispatch({ type: UPDATE_PHOTO_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: UPDATE_PHOTO_FAILURE, payload: error }));
    };
  };