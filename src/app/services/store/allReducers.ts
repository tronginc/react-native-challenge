import {combineReducers} from 'redux';
import app from './app/reducer';

export const allReducers = combineReducers({
  app,
});

export type RootState = ReturnType<typeof allReducers>;
