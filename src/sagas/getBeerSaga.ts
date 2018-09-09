import { call, put } from 'redux-saga/effects';
import beerListService from '../services/beerListService';
import { SINGLE_BEER_DATA_FAIL, SINGLE_BEER_DATA_SUCCESS } from '../types/Actions';

export function* getBeerSaga(action:any):IterableIterator<any> {
    try {
       const { data } = yield call(() => ( beerListService.getBeer(action.id)) );

       yield put({ type: SINGLE_BEER_DATA_SUCCESS, beerList: data });
    } catch (error) {
       yield put({ type: SINGLE_BEER_DATA_FAIL, error });
    }
}