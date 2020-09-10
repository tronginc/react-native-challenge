import { checkKeyInObject, loadString } from '@app/common';
import { APP_THEME, USER_TOKEN } from '../../../assets/string';
import { MyAppTheme, ThemeType } from '@app/theme';
import { put } from 'redux-saga/effects';
import { onAppLoaded, onSetAppTheme, onSetToken } from './action';

export function* onLoadApp() {
  const appTheme = yield loadString(APP_THEME);
  const userToken = yield loadString(USER_TOKEN);
  if (typeof appTheme === 'string' && checkKeyInObject(MyAppTheme, appTheme)) {
    yield put(onSetAppTheme(appTheme as ThemeType));
  }
  if (typeof userToken === 'string') {
    yield put(onSetToken(userToken));
  }
  yield put(onAppLoaded());
}
