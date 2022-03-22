import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, SET_USER} from '../actions/actions';

function visibilityFilter(state = '', action) { //Returning an empty state
    switch (action.type) {
        case SET_FILTER:
            return action.value;//Returning the value that is in the action
            default:
                return state;
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
            default:
                return state;
    }
}
function user(state = '', action) {
    switch (action.type) {
        case SET_USER:
            return action.value;
            default:
                return state;
    }
}
function userupdate(state = '', action) {
    switch (action.type) {
        case SET_UPDATE:
            return action.value;
            default:
                return state;
    }
}
const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    user,
    userupdate
});


export default moviesApp; // exporting the default which is the both reducers