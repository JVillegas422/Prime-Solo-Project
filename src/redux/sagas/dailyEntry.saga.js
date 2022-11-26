import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addNewEntry(action) {
    try {
        yield axios.post('/api/daily_entry', action.payload);
        yield put({ type: 'FETCH_NEW_ENTRY' });
    } catch (error) {
        console.error('Error in addNewEntry', error);
    }
}

function* fetchEntryHistory() {
    // get all entries from the DB
    try {
        const entryHistory = yield axios.get('/api/daily_entry');
        console.log('get all:', entryHistory.data);
        yield put({ type: 'SET_ENTRY_HISTORY', payload: entryHistory.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchEditEntry(action) {
    try {
        const response = yield axios.get(`/api/daily_entry/${action.payload}`);
        yield put({ type: 'SET_EDIT_ENTRY', payload: response.data });
    } catch (error) {
        console.error('Error in fetchEditEntry', error);
    }
}

function* saveEntry(action) {
    // edit
    if (action.payload.id) {
        yield axios.put(`/api/daily_entry/${action.payload.id}`, action.payload);
    }
    // add new
    else {
        yield axios.post(`/api/daily_entry`, action.payload);
        yield put({ type: 'FETCH_NEW_ENTRY' });
    }
}

function* deleteEntry(action) {
    try {
        yield axios.delete(`/api/daily_entry/${action.payload}`);
        yield put({ type: 'FETCH_ENTRY_HISTORY' });
    } catch (error) {
        console.error('Error in delete prescription', error);
    }
}


function* dailyEntry() {
    yield takeLatest('ADD_NEW_ENTRY', addNewEntry);
    yield takeLatest('FETCH_ENTRY_HISTORY', fetchEntryHistory);
    yield takeLatest('FETCH_EDIT_ENTRY', fetchEditEntry);
    yield takeLatest('SAVE_ENTRY', saveEntry);
    yield takeLatest('DELETE_ENTRY', deleteEntry);

}

export default dailyEntry;