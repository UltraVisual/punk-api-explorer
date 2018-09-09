import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import { watcherSaga } from '../sagas/beerDataSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(watcherSaga);

export default store;