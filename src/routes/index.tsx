import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { ApplicationState } from '../store';

const Routes: React.FC = () => {
  const isLoading = useSelector(
    (state: ApplicationState) => state.auth.loading
  );
  const isLogged = useSelector((state: ApplicationState) => state.auth.logged);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2B2A3F'
        }}
      >
        <ActivityIndicator size="large" color="#2699DA" />
      </View>
    );
  }

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
