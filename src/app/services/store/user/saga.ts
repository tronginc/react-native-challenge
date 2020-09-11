import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { signIn } from '@app/service/store/user/repository';
import * as Action from './actionType';

export function* onSignIn(action: AnyAction) {
  try {
    const { data } = yield call(signIn, action.payload);
    yield put({ type: Action.SIGN_IN_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: Action.SIGN_IN_FAILED, payload: e });
  }
}
