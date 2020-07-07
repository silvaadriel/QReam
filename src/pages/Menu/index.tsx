import React, { useContext, useState, useCallback } from 'react';
import { Alert, Switch } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';
import ImagePicker from 'react-native-image-picker';

import { ApplicationState } from '../../store';
import { logoutRequest } from '../../store/auth/actions';
import { updateAvatarRequest } from '../../store/user/actions';
import { changeAppTheme } from '../../store/appStatus/actions';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';
import Avatar from '../../components/Avatar';

import {
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

  const handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione um avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao atualizar seu avatar.');
          return;
        }

        const data = new FormData();

        data.append('avatar', {
          type: 'image/jpeg',
          name: `${user.id}.jpg`,
          uri: response.uri,
        });

        dispatch(updateAvatarRequest(data));
      },
    );
  }, [dispatch, user.id]);

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
        <Avatar avatarUri={user.avatar_url} onPress={handleUpdateAvatar} />

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
