import constants from '../constants';

const initialState = {
    isFetchingPhotos: false,
    isFetchingPhotosError: null,

    isDeletingPhoto: false,
    isEditingPhoto: false,

    userPhotos: [],
    userId: ''
}

export const serverReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case constants.GETTING_USER_PHOTOS:
            return {
                ...state,
                isFetchingPhotos: true
            }
        case constants.ERROR_GETTING_PHOTOS:
            return {
                ...state,
                isFetchingPhotosError: payload
            }
        case constants.GOT_USER_PHOTOS:
            return {
                ...state,
                userPhotos: payload
            }
        case constants.DELETING_PHOTO:
            return {
                ...state,
                isDeletingPhoto: true
            }
        case constants.DELETE_PHOTO:
            const deleteIndex = state.userPhotos.findIndex(e => {
                return e.id === payload
            })
            const photosAfterDeletion = state.userPhotos
                                        .slice(0, deleteIndex)
                                        .concat(state.userPhotos
                                        .slice(deleteIndex +1))
            return {
                ...state,
                userPhotos: photosAfterDeletion,
                isDeletingPhoto: false
            }
        case constants.EDITING_PHOTO:
            return {
                ...state,
                isEditingPhoto: true
            }
        case constants.EDIT_PHOTO:
            const editIndex = state.userPosts.findIndex(e => {
                return e.id === payload.id
            })

            const photosAfterEdit = state.userPhotos
                                    .slice(0, editIndex)
                                    .concat(payload)
                                    .concat(state.userPhotos
                                    .slice(editIndex + 1))
            return {
                ...state,
                userPhotos: photosAfterEdit,
                isEditingPhoto: false
            }
        case constants.STORE_LOGIN:
            return {
                ...state,
                userId: payload
            }
        default: 
            return state
    }
}