import React from 'react';

import {SafeAreaView} from './styles';

const Container: React.FC = ({children}) => (
  <SafeAreaView>{children}</SafeAreaView>
);

export default Container;
