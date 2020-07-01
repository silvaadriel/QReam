import React, { useContext, useState, useCallback } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';

import { ApplicationState } from '../../store';
import { logoutRequest } from '../../store/auth/actions';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';

import {
  AvatarImage,
  Button,
  ButtonGroup,
  ButtonText,
  User,
  UserName,
  Preferences,
} from './styles';

const Menu: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user.data);
  // const [buttonGroupOpacity] = useState(new Animated.Value(1));
  const [preferencesOffset] = useState(
    new Animated.ValueXY({ x: 0, y: Dimensions.get('window').height }),
  );

  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);

  const navigation = useNavigation();

  const showPreferences = useCallback(() => {
    Animated.spring(preferencesOffset.y, {
      toValue: Dimensions.get('window').height / 3,
      tension: 20,
      useNativeDriver: false,
    }).start();
  }, [preferencesOffset]);

  return (
    <ContainerFluid>
      <Header>
        <IconButton
          onPress={() => navigation.goBack()}
          icon="keyboard-arrow-left"
          iconColor={transparentize(0.5, theme.colors.textOnSecundary)}
          iconSize={48}
        />
      </Header>

      <User>
        {user.avatar ? (
          <AvatarImage
            source={{
              uri: `https://qream-api.herokuapp.com/files/${user.avatar}`,
            }}
          />
        ) : (
          <Icon
            name="account-circle"
            color={theme.colors.textOnSecundary}
            size={95}
          />
        )}

        <UserName>{user.name}</UserName>
      </User>

      <Preferences style={{ top: preferencesOffset.y }} />

      <ButtonGroup>
        <Button>
          <ButtonText>Seus dados</ButtonText>
        </Button>

        <Button>
          <ButtonText>Alterar informações</ButtonText>
        </Button>

        <Button onPress={() => showPreferences()}>
          <ButtonText>Preferências</ButtonText>
        </Button>

        <Button onPress={() => dispatch(logoutRequest())}>
          <ButtonText>SAIR</ButtonText>
        </Button>
      </ButtonGroup>
    </ContainerFluid>
  );
};

export default Menu;
