import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import Router from './Router';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#2b2a3f" />
    <Router />
  </>
);

export default App;
