import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { navigationRef } from './rootNavigation';

import store from './store';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle="light-content" backgroundColor="#2b2a3f" />
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
