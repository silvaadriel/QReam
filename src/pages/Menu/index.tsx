import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

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
} from './styles';

const Menu: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user.data);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <ContainerFluid>
      <Header>
        <IconButton
          onPress={() => navigation.goBack()}
          icon="keyboard-arrow-left"
          iconColor="#DADADA70"
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
          <Icon name="account-circle" color="#B8B8B9" size={95} />
        )}

        <UserName>{user.name}</UserName>
      </User>

      <ButtonGroup>
        <Button>
          <ButtonText>Seus dados</ButtonText>
        </Button>

        <Button>
          <ButtonText>Alterar informações</ButtonText>
        </Button>

        <Button>
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
