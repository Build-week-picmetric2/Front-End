import { axiosWithAuth } from '../../helpers/axiosWithAuth';
import constants from '../constants';

export const storeLogin = userId => {
    return {type: constants.STORE_LOGIN, payload: userId}
}

export const getUserPhotos = userID => dispatch => {
    dispatch({ type: constants.GETTING_USER_PHOTOS })
    axiosWithAuth()
    .get(`/api/photos/${id}`)
    .then(res => {
        console.log(res, 'get photo req')
        dispatch({ type: constants.GOT_USER_PHOTOS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: constants.ERROR_GETTING_PHOTOS, payload: err})
    })
}

export const deletePhotos = id => dispatch => {
    dispatch({ type: constants.DELETING_PHOTO })

    axiosWithAuth()
    .delete(`/api/photos/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: constants.DELETE_PHOTO, payload: id })
    })
    .catch(err => {
        console.log(err)
    })
}

export const editPhotos = photoToEdit => dispatch => {
    dispatch({ type: constants.EDITING_PHOTO })
    const { name, category } = photoToPost;
    const newPhoto = {
        photo: photoToEdit.title,
        name: photoToEdit.category
    }
    console.log(photoToPost, 'put object shape')
    console.log(name, category, 'what it looks like')
    axiosWithAuth()
    .put(`/api/photos/${photoToEdit.id}`, newPhoto)
    .then(res => {
        console.log(res, 'put response')
        dispatch({ type: constants.EDIT_PHOTO, payload: photoToPost })
    })
    .catch(err => {
        console.log(err)
    })
}

