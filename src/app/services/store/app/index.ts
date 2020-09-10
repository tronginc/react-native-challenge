import { takeLatest } from 'redux-saga/effects';
import * as Saga from './saga';
import * as Action from './actionType';
export function* appSaga() {
  yield takeLatest(Action.INIT_APP, Saga.onLoadApp);
}
