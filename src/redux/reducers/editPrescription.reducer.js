// const editPrescriptions = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_EDIT_PRESCRIPTIONS':
//             return action.payload;
//         case 'CLEAR_EDIT_PRESCRIPTIONS':
//             return [];
//         case 'EDIT_PRESCRIPTIONS_PRESCRIPTION':
//             return {...state, prescription: action.payload};
//         case 'EDIT_PRESCRIPTIONS_DESCRIPTION':
//             return {...state, description: action.payload};
//         case 'EDIT_PRESCRIPTIONS_DOSAGE':
//             return {...state, dosage: action.payload};
//         case 'EDIT_PRESCRIPTIONS_COUNT':
//             return {...state, count: action.payload};
//         default:
//             return state;
//     }
// }

const editPrescriptions = (state = [], action) => {
    switch (action.type) {
        case 'SET_EDIT_PRESCRIPTIONS':
            return action.payload;
        case 'EDIT_PRESCRIPTION_DETAILS':
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default editPrescriptions;