import { combineReducers, Reducer } from 'redux';
import { IBeer, IBeerList } from '../types/Beer';
import beerInfoReducer from './beerInfoReducer';
import beerListReducer from './beerListReducer';

export interface IApplicationState {
    beerList:IBeerList,
    beerInfo: IBeer
}

const rootReducer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
    beerInfo: beerInfoReducer, 
    beerList: beerListReducer,
});

export default rootReducer;