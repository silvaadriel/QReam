import 'react-native-gesture-handler';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';

import { navigationRef } from './rootNavigation';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import store from './store';

import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>();

  useEffect(() => {
    store.subscribe(storeListener);
    SplashScreen.hide();
  });

  const storeListener = useCallback(() => {
    const state = store.getState();

    setTheme(state.appStatus.theme);
  }, []);

  const getTheme = useMemo(() => {
    switch (theme) {
      case 'light':
        return light;
      case 'dark':
        return dark;
      default:
        return light;
    }
  }, [theme]);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="light-content" backgroundColor="#2b2a3f" />
        <ThemeProvider theme={getTheme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
