import { apiCall } from './api/api';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MEMBERS_PENDING,
    REQUEST_MEMBERS_SUCCESS,
    REQUEST_MEMBERS_FAILED
} from './constants';

export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestMembers = () => dispatch => {
    dispatch ( { type: REQUEST_MEMBERS_PENDING } );
    apiCall('https://jsonplaceholder.typicode.com/users', {mode: 'no-cors'})
        .then(data => dispatch({ type: REQUEST_MEMBERS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_MEMBERS_FAILED, payload: error }))
}