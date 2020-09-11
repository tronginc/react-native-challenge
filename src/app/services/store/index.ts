import { createStore, applyMiddleware, compose } from 'redux';
import { allReducers } from './allReducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootSagas } from './rootSagas';

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  allReducers,
  composeEnhancer(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSagas);
export { store };
