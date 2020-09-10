import { ThemeType } from '@app/theme';
import * as Action from './actionType';

export const onSetInternet = (payload: boolean) => ({
  type: Action.SET_INTERNET,
  payload,
});

export const onSetToken = (payload: any) => ({
  type: Action.SET_TOKEN,
  payload,
});

export const onSetAppTheme = (payload: ThemeType) => ({
  type: Action.SET_APP_THEME,
  payload,
});

export const onInitApp = () => ({
  type: Action.INIT_APP,
});

export const onAppLoaded = () => ({
  type: Action.SET_APP_LOADED,
});
