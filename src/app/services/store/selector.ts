import { createSelector } from 'reselect';
import { RootState } from '@app/service/store/allReducers';

const appSelector = (state: RootState) => state.app;
const userSelector = (state: RootState) => state.user;

export const selectApp = createSelector(appSelector, (app) => app);
export const selectUser = createSelector(userSelector, (user) => user);
