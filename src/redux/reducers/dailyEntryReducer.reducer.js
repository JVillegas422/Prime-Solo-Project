
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

export default dailyEntryReducer;