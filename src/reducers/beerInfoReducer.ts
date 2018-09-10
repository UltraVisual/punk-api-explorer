import { Reducer } from "redux";
import { INITIAL_BEER } from '../constants/InitialBeer';
import { SINGLE_BEER_DATA_FAIL, SINGLE_BEER_DATA_SUCCESS } from "../types/Actions";
import { IBeer } from "../types/Beer";

const beerInfoReducer:Reducer<IBeer> = (state:IBeer = INITIAL_BEER, action:any) => {
    switch(action.type) {
        case SINGLE_BEER_DATA_SUCCESS:
            return action.beerList[0];
        case SINGLE_BEER_DATA_FAIL:
            return INITIAL_BEER;
        default:
            return state;
    }
}

export default beerInfoReducer;
