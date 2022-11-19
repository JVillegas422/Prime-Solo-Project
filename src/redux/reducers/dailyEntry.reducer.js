import { combineReducers } from "redux";


const dailyEntryForm = (state =[], action) => {
    switch (action.type) {
        case 'ADD_NEW_ENTRY':
            return {
                ...state,
                prescription_name: action.payload.prescription_name,
                prescription_amount: action.payload.prescription_amount,
                tstz: action.payload.tstz,
                quantity: action.payload.quantity,
                notes: action.payload.notes,
            }
        default:
            return state;
    }
}

// const userMedCount = (state = [], action) => {
//     switch (action.payload) {
//         case 'SET_MED_USER_COUNT':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// const userPrescriptions = () => {
//     switch (action.payload) {
//         case 'SET_PRESCRIPTIONS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

export default combineReducers({
    dailyEntryForm,
    // userMedCount,
    // userPrescriptions,
});