import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Menu from '../pages/Menu';
import InformValue from '../pages/InformValue';
import Password from '../pages/Password';
import ShowQRCode from '../pages/ShowQRCode';
import ScanQRCode from '../pages/ScanQRCode';
import TransactionConfirmation from '../pages/TransactionConfirmation';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Menu" component={Menu} />
      <App.Screen name="InformValue" component={InformValue} />
      <App.Screen name="Password" component={Password} />
      <App.Screen name="ShowQRCode" component={ShowQRCode} />
      <App.Screen name="ScanQRCode" component={ScanQRCode} />
      <App.Screen
        name="TransactionConfirmation"
        component={TransactionConfirmation}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
