
const dailyEntryReducer = (state =[], action) => {
    switch (action.type) {
        case 'SET_NEW_ENTRY':
            return action.payload;
        case 'CLEAR_NEW ENTRY':
            return [];
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
        // case 'SET_PRESCRIPTIONS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

export default dailyEntryReducer;