import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import InformValue from './pages/InformValue';
import Password from './pages/Password';
import ShowQRCode from './pages/ShowQRCode';
import ScanQRCode from './pages/ScanQRCode';
import TransactionConfirmation from './pages/TransactionConfirmation';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Menu: undefined;
  InformValue: {transactionType: string};
  Password: undefined;
  ShowQRCode: undefined;
  ScanQRCode: undefined;
  TransactionConfirmation: undefined;
};

const Router: React.FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
    </NavigationContainer>
  );
};

export default Router;
