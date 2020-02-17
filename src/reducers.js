import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MEMBERS_PENDING,
    REQUEST_MEMBERS_SUCCESS,
    REQUEST_MEMBERS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchMembers = (state = initialStateSearch, actions = {}) => {
    switch (actions.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: actions.payload})
        default:
            return state;
    }
}

const initialStateMembers = {
    isPending: false,
    members: [],
    error: ''
}

export const findMembers = (state = initialStateMembers, actions = {}) => {
    switch (actions.type){
        case REQUEST_MEMBERS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_MEMBERS_SUCCESS:
            return Object.assign({}, state, {members: actions.payload, isPending: false});
        case REQUEST_MEMBERS_FAILED:
            return Object.assign({}, state, {error: actions.payload, isPending:false});
        default:
            return state;
    }
}

