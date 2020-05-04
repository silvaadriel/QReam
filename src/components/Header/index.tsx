import React from 'react';
import { ViewProps } from 'react-native';

import { HeaderContainer } from './styles';

const Header: React.FC<ViewProps> = ({ children, ...rest }) => (
  <HeaderContainer {...rest}>{children}</HeaderContainer>
);

export default Header;
