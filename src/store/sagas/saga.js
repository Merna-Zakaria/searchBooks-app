import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../apis/api';
import {
    FETCH_SEARCH_RESULT_SAGA,
    SINGLE_BOOK_SAGA,
    FETCH_SEARCH_RESULT,
    SINGLE_BOOK,

} from '../actions/types';

function* FetchSearchResult (action) {
    const {searchValue} = action;
    try {
        const response = yield call( api.fetchSearchResult, searchValue );
        console.log('saga response' , response.data.items)
                          yield put ( {type :FETCH_SEARCH_RESULT , payload :response.data.items} )
    }catch(err){
        console.log(err)
    }
};


function* FetchSingleBook () {
    try {
        const response = yield call (api.fetchSingleBook)
                     yield put ( { type: SINGLE_BOOK, payload: response.data})
    }catch (err){
        console.log(err)
    }
}
  







export default function* rootSaga() {
    yield takeLatest ( FETCH_SEARCH_RESULT_SAGA, FetchSearchResult);
    yield takeLatest ( SINGLE_BOOK_SAGA, FetchSingleBook)

}

