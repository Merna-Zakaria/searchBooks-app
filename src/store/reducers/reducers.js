import {
    SINGLE_BOOK,
    FETCH_SEARCH_RESULT
} from '../actions/types';

export const initialState = {};

export default ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_RESULT :
            return { ...state, searchResult : action.payload };
        case SINGLE_BOOK :
            return { ...state, singleBook: action.payload };  
        default :
            return state;      
    }
};




