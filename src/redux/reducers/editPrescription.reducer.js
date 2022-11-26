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