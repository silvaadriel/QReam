import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import InformValue from '../pages/InformValue';
import Password from '../pages/Password';
import ShowQRCode from '../pages/ShowQRCode';
import ScanQRCode from '../pages/ScanQRCode';
import TransactionConfirmation from '../pages/TransactionConfirmation';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="InformValue" component={InformValue} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="ShowQRCode" component={ShowQRCode} />
      <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
      <Stack.Screen
        name="TransactionConfirmation"
        component={TransactionConfirmation}
      />
    </Stack.Navigator>
  );
};

export default Routes;
