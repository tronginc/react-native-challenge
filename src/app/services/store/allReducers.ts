import { combineReducers } from 'redux';
import app from './app/reducer';
import user from './user/reducer';

export const allReducers = combineReducers({
  app,
  user,
});

export type RootState = ReturnType<typeof allReducers>;
