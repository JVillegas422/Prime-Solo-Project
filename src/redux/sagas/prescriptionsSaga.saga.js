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

function* prescriptionsSaga() {
    yield takeLatest('FETCH_PRESCRIPTION_LIST', fetchPrescriptions);
    yield takeLatest('ADD_PRESCRIPTION', addPrescription);

}

export default prescriptionsSaga;