import { Reducer } from "redux";
import { SINGLE_BEER_DATA_FAIL, SINGLE_BEER_DATA_SUCCESS } from "../types/Actions";
import { IBeer } from "../types/Beer";

const initialBeer:IBeer = {
    id: 0,
    name: '',
}

const beerInfoReducer:Reducer<IBeer> = (state:IBeer = initialBeer, action:any) => {
    switch(action.type) {
        case SINGLE_BEER_DATA_SUCCESS:
            return action.beerList[0];
        case SINGLE_BEER_DATA_FAIL:
            return initialBeer;
        default:
            return state;
    }
}

export default beerInfoReducer;
