import { call, put } from 'redux-saga/effects';
import beerListService from '../services/beerListService';
import { BEER_DATA_FAIL, BEER_DATA_SUCCESS } from '../types/Actions';

export default function* getBeersSaga():IterableIterator<any> {
    try {
       const { data } = yield call(beerListService.getBeers);

       yield put({ type: BEER_DATA_SUCCESS, beerList: data });
    } catch (error) {
       yield put({ type: BEER_DATA_FAIL, error });
    }
}
