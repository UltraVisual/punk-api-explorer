import { Reducer } from "redux";
import { INITIAL_BEER } from '../constants/InitialBeer';
import { BEER_DATA_FAIL, BEER_DATA_SUCCESS } from "../types/Actions";
import { IBeerList } from "../types/Beer";

const initialState:IBeerList = {
    beers: [ INITIAL_BEER ]
}

const beerListReducer:Reducer<IBeerList> = (state:IBeerList = initialState, action:any) => {
    switch(action.type) {
        case BEER_DATA_SUCCESS:
            return {
                beers: action.beerList
            };
        case BEER_DATA_FAIL:
            return state;
        default:
            return state;
    }
}

export default beerListReducer;
