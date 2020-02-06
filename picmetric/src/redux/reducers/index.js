import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
    // ADD_PHOTO_START,
    // ADD_PHOTO_SUCCESS,
    // ADD_PHOTO_FAILURE,
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
        // case ADD_PHOTO_START:
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: ''
        //     };
        // case ADD_PHOTO_SUCCESS:
        //     return {
        //         ...state,
        //         photos: [...action.payload],
        //         error: '',
        //         isFetching: false
        //     };
        // case ADD_PHOTO_FAILURE:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: action.payload
        //     }
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
                photos: [...action.payload]
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
              photos: [...action.payload]
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