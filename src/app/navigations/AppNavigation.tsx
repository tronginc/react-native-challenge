import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@app/service/navigation';
import { MyAppTheme } from '@app/theme';
import { RootNavigation } from './RootNavigator';
import { selectApp } from '@app/service/store/selector';
import { AppState } from '@app/service/store/app/type';
import { onInitApp } from '@app/service/store/app/action';

export const AppContainer = () => {
  const dispatch = useDispatch();
  const appState: AppState = useSelector(selectApp);
  useEffect(() => {
    dispatch(onInitApp());
  }, [dispatch]);
  return (
    <NavigationContainer ref={navigationRef} theme={MyAppTheme[appState.theme]}>
      {(!appState.loading && <RootNavigation token={appState.token} />) || null}
    </NavigationContainer>
  );
};
