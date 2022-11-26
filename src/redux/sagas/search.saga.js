import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSearch(action) {
    console.log('in fetchSearch', action.payload);
    try {
        const response = yield axios.get(`/api/search/${action.payload}`);
        let medications = response.data.results.map(products => (products.products));
        // let brandName = medications.map(items => (items.map(nameItem => (nameItem.brand_name))));
        // let activeIngredients = medications.map(details => (details.map(itemDetails => (itemDetails.active_ingredients))));
        // console.log('looking at active ingredients', activeIngredients);
        yield put({
            type: 'SET_SEARCH',
            payload: medications
        });
    }
    catch (error) {
        console.error('Search request failed', error)
    }
}

function* searchSaga() {
    yield takeLatest('FETCH_SEARCH', fetchSearch);
}

export default searchSaga;