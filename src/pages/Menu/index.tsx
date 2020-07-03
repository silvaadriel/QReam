import React, { useContext, useState, useCallback } from 'react';
import { Switch } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';

import { ApplicationState } from '../../store';
import { logoutRequest } from '../../store/auth/actions';
import { changeAppTheme } from '../../store/appStatus/actions';

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
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ThemeSwitcherContainer,
  ThemeSwitcherText,
} from './styles';

const Menu: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user.data);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);

  const navigation = useNavigation();

  const toggleModal = useCallback(() => {
    setIsModalVisible(previousIsModalVisible => !previousIsModalVisible);
  }, []);

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

      <Modal
        isVisible={isModalVisible}
        swipeDirection={['down']}
        onSwipeComplete={toggleModal}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Preferências</ModalTitle>
            <IconButton
              onPress={toggleModal}
              icon="keyboard-arrow-down"
              iconColor={transparentize(0.5, theme.colors.textOnSecundary)}
              iconSize={38}
            />
          </ModalHeader>
          <ThemeSwitcherContainer>
            <ThemeSwitcherText>
              {theme.name === 'light' ? 'Ativar' : 'Desativar'} tema escuro
            </ThemeSwitcherText>
            <Switch
              value={theme.name === 'dark'}
              onValueChange={() =>
                dispatch(
                  changeAppTheme(theme.name === 'light' ? 'dark' : 'light'),
                )
              }
            />
          </ThemeSwitcherContainer>
        </ModalContainer>
      </Modal>

      <ButtonGroup>
        <Button>
          <ButtonText>Seus dados</ButtonText>
        </Button>

        <Button>
          <ButtonText>Alterar informações</ButtonText>
        </Button>

        <Button onPress={() => toggleModal()}>
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
