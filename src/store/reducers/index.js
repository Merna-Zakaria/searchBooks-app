// import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import reducers from './reducers';

export default combineReducers ({
    searchResult : reducers
});