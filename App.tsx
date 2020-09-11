import React, { Suspense } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '@app/service/store';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Transitioning } from 'react-native-reanimated';
import {
  _transitionApp,
  transition,
} from '@app/service/transition/TransitionService';
import { AppContainer } from './src/app/navigations/AppNavigation';

export const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <Suspense fallback={View}>
          <Transitioning.View
            style={styles.root}
            transition={transition}
            ref={_transitionApp}>
            <AppContainer />
          </Transitioning.View>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
