import { createStore, applyMiddleware } from 'redux';
import { allReducers } from './allReducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootSagas } from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSagas);
export { store };
