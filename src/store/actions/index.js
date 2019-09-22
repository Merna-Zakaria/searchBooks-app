import {
    FETCH_SEARCH_RESULT_SAGA,
    SINGLE_BOOK,
} from './types';


export const onFetchSearchResult = (searchValue) => ({ type : FETCH_SEARCH_RESULT_SAGA , searchValue });

export const onFetchSingleBook = (BOOKID) => ({ type: SINGLE_BOOK , BOOKID});
