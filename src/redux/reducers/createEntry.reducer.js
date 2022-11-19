import { combineReducers } from "redux";

const createEntryForm = (state =[], action) => {
    switch (action.payload) {
        case 'ADD_PRESCRIPTION_NAME':
            return {
                ...state,
                prescriptionName: action.payload.prescriptionName,
            }
        case 'ADD_TIMESTAMP':
            return {
                ...state,
                timeStamp: action.payload.timeStamp,
            }
        case 'ADD_QUANTITY':
            return {
                ...state,
                quantity: action.payload.quantity,
            }
        case 'ADD_ENTRY_NOTES':
            return {
                ...state,
                entryNotes: action.payload.entryNotes,
            }
        default:
            return state;
    }
}

const userMedCount = (state = [], action) => {
    switch (action.payload) {
        case 'SET_MED_USER_COUNT':
            return action.payload;
        default:
            return state;
    }
}

const userMedList = () => {
    switch (action.payload) {
        case 'SET_USER_MED_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    createEntryForm,
    userMedCount,
    userMedList,
});