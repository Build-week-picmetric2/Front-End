//yarn add axios - done
import { axiosWithAuth } from '../../helpers/axiosWithAuth';

//get PHOTOS from database
export const FETCH_PHOTO_START = 'FETCH_PHOTO_START';
export const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';
export const FETCH_PHOTO_FAILURE = 'FETCH_PHOTO_FAILURE';

//post to database
// export const ADD_PHOTO_START = 'ADD_PHOTO_START';
// export const ADD_PHOTO_SUCCESS = 'ADD_PHOTO_SUCCESS';
// export const ADD_PHOTO_FAILURE = 'ADD_PHOTO_FAILURE';

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

// export const addPhoto = smurf => {
//     return dispatch => {
//         dispatch({ type: ADD_PHOTO_START });
//         axios
//             .post(`http://localhost:3333/smurfs`, photo)
//             .then(response => {
//                 dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data })
//             })
//             .catch(error => {
//                 dispatch({ type: ADD_SMURF_FAILURE, payload: error })
//             })
//     };
// };

export const deletePhoto = photo => {
    return dispatch => {
      dispatch({ type: DELETE_PHOTO_START });
      axiosWithAuth()
        .delete(`api/photos/${photo.id}`)
        .then(response => dispatch({ type: DELETE_PHOTO_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: DELETE_PHOTO_FAILURE, payload: error }));
    };
  };
  
  export const updatePhoto = photo => {
    return dispatch => {
      dispatch({ type: UPDATE_PHOTO_START });
      axiosWithAuth()
        .put(`api/photos/${photo.id}`, photo)
        .then(response => dispatch({ type: UPDATE_PHOTO_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: UPDATE_PHOTO_FAILURE, payload: error }));
    };
  };