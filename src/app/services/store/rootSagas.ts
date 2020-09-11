import { all } from 'redux-saga/effects';
import { appSaga } from './app';
import { userSaga } from '@app/service/store/user';

export const rootSagas = function* rootSaga() {
  yield all([appSaga(), userSaga()]);
};
