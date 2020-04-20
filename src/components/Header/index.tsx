import React from 'react';

import {HeaderContainer} from './styles';
import {ViewProps} from 'react-native';

const Header: React.FC<ViewProps> = ({children, ...rest}) => (
  <HeaderContainer {...rest}>{children}</HeaderContainer>
);

export default Header;
