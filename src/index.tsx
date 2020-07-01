import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
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
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="light-content" backgroundColor="#2b2a3f" />
        <ThemeProvider theme={light}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
