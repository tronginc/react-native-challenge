import { takeLatest } from 'redux-saga/effects';
import * as Action from './actionType';
import * as Saga from './saga';
export function* userSaga() {
  yield takeLatest(Action.SIGN_IN_START, Saga.onSignIn);
}
