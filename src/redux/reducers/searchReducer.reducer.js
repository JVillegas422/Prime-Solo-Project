import { combineReducers } from 'redux';

const searchList = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            console.log(action.payload);
            return [...state, action.payload];
        case 'CLEAR_SEARCH':
            return [];
    }
    return state;
}

export default combineReducers({
    searchList,
})