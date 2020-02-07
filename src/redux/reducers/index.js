import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
    INSPECT_PHOTO_START,
    INSPECT_PHOTO_SUCCESS,
    INSPECT_PHOTO_FAILURE,
    DELETE_PHOTO_START,
    DELETE_PHOTO_SUCCESS,
    DELETE_PHOTO_FAILURE,
    UPDATE_PHOTO_START,
    UPDATE_PHOTO_SUCCESS,
    UPDATE_PHOTO_FAILURE
} from '../actions';

const initialState = {
    photos: [],
    error: '',
    isFetching: false
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHOTO_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_PHOTO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                photos: [...action.payload]
            };
        case FETCH_PHOTO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case INSPECT_PHOTO_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case INSPECT_PHOTO_SUCCESS:
            return {
                ...state,
                photos: [...state.photos, action.payload],
                error: '',
                isFetching: false
            };
        case INSPECT_PHOTO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case DELETE_PHOTO_START:
            return {
                ...state,
                error: "",
                isFetching: true
            };
        case DELETE_PHOTO_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                photos: [...state.photos, action.payload]
        };
        case DELETE_PHOTO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
        };
        case UPDATE_PHOTO_START:
            return {
              ...state,
              isFetching: true,
              error: ""
            };
          case UPDATE_PHOTO_SUCCESS:
            return {
              ...state,
              isFetching: false,
              error: "",
              photos: [...state.photos, action.payload]
            };
          case UPDATE_PHOTO_FAILURE:
            return {
              ...state,
              isFetching: false,
              error: action.payload
            };
        default: 
            return state;
    }
}

export default reducer;