import { createSelector } from 'reselect';
import { RootState } from '@app/service/store/allReducers';

const appSelector = (state: RootState) => state.app;

export const selectApp = createSelector(appSelector, (app) => app);
