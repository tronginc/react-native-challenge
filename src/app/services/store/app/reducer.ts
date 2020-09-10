import { ActionProps, AppState } from './type';
import * as Action from './actionType';
import produce from 'immer';

const initialAppState: AppState = {
  internetState: true,
  token: null,
  loading: true,
  theme: 'default',
};

export default produce(
  (draftState: AppState, { type, payload }: ActionProps) => {
    switch (type) {
      case Action.SET_INTERNET:
        draftState.internetState = payload;
        break;
      case Action.SET_TOKEN:
        draftState.token = payload;
        break;
      case Action.SET_APP_THEME:
        console.log('payload', payload);
        draftState.theme = payload;
        break;
      case Action.SET_APP_LOADED:
        draftState.loading = false;
        break;
    }
  },
  initialAppState,
);
