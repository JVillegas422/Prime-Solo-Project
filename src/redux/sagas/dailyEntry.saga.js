import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addNewEntry(action) {
    try {
        const result = yield axios.post('/api/daily-entry', action.payload);
        yield put({ type: 'FETCH_NEW_ENTRY', payload: result.data.daily_entry_id});
    } catch (error) {
        console.error('Error in fetch prescription', error)
    }
}


// function* fetchNewEntry(action) {
//     // Get user prescriptions from database by id
//     try {
//         const prescriptionId = action.payload;
//         const userPrescription = yield axios.get(`/api/prescriptions/${prescriptionId}`);
//         yield put({ type: 'SET_NEW_ENTRY', payload: userPrescription.data });
//     } catch (error) {
//         console.log('Error in set movie details', error);
//     }
// }


function* newEntrySaga() {
    yield takeLatest('ADD_NEW_ENTRY', addNewEntry);

    // yield takeLatest('FETCH_ENTRY', fetchNewEntry);

}

export default newEntrySaga;