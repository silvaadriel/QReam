import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
