
const dailyEntryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ENTRY_HISTORY':
            return action.payload;
        default:
            return state;
    }
}

// all the entries from the DB
// const dailyEntryReducer = (state = [], action) => {
//     if(action.type === 'SET_ENTRY_HISTORY') {
//         return action.payload;
//     }

//     return state;
// }

export default dailyEntryReducer;