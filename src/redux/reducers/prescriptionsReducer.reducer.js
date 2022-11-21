// import { combineReducers } from 'redux';

const prescriptionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRESCRIPTION_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default prescriptionsReducer;