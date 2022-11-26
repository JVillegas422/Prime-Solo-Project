import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPrescriptions() {
    console.log('in fetchPrescriptions');
    try {
        const prescriptions = yield axios.get('/api/prescriptions');
        console.log('get prescriptions', prescriptions.data);
        yield put({ type: 'SET_PRESCRIPTION_LIST', payload: prescriptions.data });
    } catch (err) {
        console.log('Error in fetchPrescriptions', err)
    }
}

function* addPrescription(action) {
    try {
        yield axios.post('/api/prescriptions', action.payload);
        yield put({ type: 'FETCH_PRESCRIPTION' });
    } catch (error) {
        console.error('Error in addPrescription', error);
    }
}

function* fetchEditPrescription(action) {
    try {
        const response = yield axios.get(`/api/prescriptions/${action.payload}`);
        yield put({ type: 'SET_EDIT_PRESCRIPTIONS', payload: response.data });
    } catch (error) {
        console.error('Error in fetchEditPrescription', error);
    }
}

function* savePrescription(action) {
    // edit
    if (action.payload.id) {
        yield axios.put(`/api/prescriptions/${action.payload.id}`, action.payload);
    }
    // add new
    else {
        yield axios.post(`/api/prescriptions`, action.payload);
        yield put({ type: 'FETCH_PRESCRIPTION' });
    }
}

function* deletePrescription(action) {
    try {
        yield axios.delete(`/api/prescriptions/${action.payload}`);
        yield put({ type: 'FETCH_PRESCRIPTION_LIST' });
    } catch (error) {
        console.error('Error in delete prescription', error);
    }
}

function* prescriptionsSaga() {
    yield takeLatest('FETCH_PRESCRIPTION_LIST', fetchPrescriptions);
    yield takeLatest('ADD_PRESCRIPTION', addPrescription);
    yield takeLatest('FETCH_EDIT_PRESCRIPTIONS', fetchEditPrescription);
    yield takeLatest('SAVE_PRESCRIPTION', savePrescription);
    yield takeLatest('DELETE_PRESCRIPTION', deletePrescription);

}

export default prescriptionsSaga;