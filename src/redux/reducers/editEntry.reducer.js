const editEntry = (state = [], action) => {
    switch (action.type) {
        case 'SET_EDIT_ENTRY':
            return action.payload;
        case 'EDIT_ENTRY_DETAILS':
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default editEntry;