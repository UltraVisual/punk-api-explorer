import { all, takeEvery } from 'redux-saga/effects';
import { GET_BEER_REQUEST, GET_BEERS_REQUEST } from '../types/Actions';
import { getBeerSaga } from './getBeerSaga';
import getBeersSaga from './getBeersSaga';

export function* watcherSaga() {
    yield all([
        takeEvery(GET_BEER_REQUEST, getBeerSaga), 
        takeEvery(GET_BEERS_REQUEST, getBeersSaga)
    ]);
}
