import { Reducer } from "redux";
import { BEER_DATA_FAIL, BEER_DATA_SUCCESS } from "../types/Actions";
import { IBeer, IBeerList } from "../types/Beer";

const initialBeer:IBeer = {
    id: 0,
    name: 'Loading...',
}

const initialState:IBeerList = {
    beers: [ initialBeer ]
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
