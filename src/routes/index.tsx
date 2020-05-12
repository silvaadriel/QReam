import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { ApplicationState } from '../store';

interface StateProps {
  isLogged: boolean;
  isLoading: boolean;
}

type RoutesProps = StateProps;

const Routes: React.FC<RoutesProps> = ({ isLogged, isLoading }) => {
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

const mapStateToProps = (state: ApplicationState) => ({
  isLogged: state.auth.logged,
  isLoading: state.auth.loading
});

export default connect(mapStateToProps)(Routes);
