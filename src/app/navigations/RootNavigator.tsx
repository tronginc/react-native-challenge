import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { APP_SCREEN } from './screenTypes';
import { Login } from '@app/screen/Auth/Login';
import { Home } from '@app/screen/Home/Home';

const RootStack = createStackNavigator();
export const RootNavigation = ({ token }: { token: any }) => (
  <RootStack.Navigator headerMode={'none'} screenOptions={{}}>
    {!token ? (
      <RootStack.Screen
        options={{ animationTypeForReplace: 'pop', gestureEnabled: false }}
        name={APP_SCREEN.AUTH.LOGIN}
        component={Login}
      />
    ) : (
      <RootStack.Screen
        options={{ gestureEnabled: false }}
        name={APP_SCREEN.HOME.HOME}
        component={Home}
      />
    )}
  </RootStack.Navigator>
);
