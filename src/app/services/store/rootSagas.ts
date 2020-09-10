import { all } from 'redux-saga/effects';
import { appSaga } from './app';

export const rootSagas = function* rootSaga() {
  yield all([appSaga()]);
};
