import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@app/service/navigation';
import { MyAppTheme } from '@app/theme';
import { RootNavigation } from './RootNavigator';
import { selectApp, selectUser } from '@app/service/store/selector';
import { AppState } from '@app/service/store/app/type';
import { onInitApp } from '@app/service/store/app/action';
import { UserState } from '@app/service/store/user/type';

export const AppContainer = () => {
  const dispatch = useDispatch();
  const appState: AppState = useSelector(selectApp);
  const userState: UserState = useSelector(selectUser);
  useEffect(() => {
    dispatch(onInitApp());
  }, [dispatch]);
  return (
    <NavigationContainer ref={navigationRef} theme={MyAppTheme[appState.theme]}>
      {(!appState.loading && <RootNavigation token={userState.token} />) ||
        null}
    </NavigationContainer>
  );
};
