import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { User as UserProps } from 'src/store/user/types';
import { ApplicationState } from 'src/store';
import * as AuthActions from '../../store/auth/actions';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';

import {
  AvatarImage,
  Button,
  ButtonGroup,
  ButtonText,
  User,
  UserName
} from './styles';

interface StateProps {
  user: UserProps;
}

interface DispatchProps {
  logout(): void;
}

type MenuProps = StateProps & DispatchProps;

const Menu: React.FC<MenuProps> = ({ user, logout }) => {
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
              uri: `https://qream-api.herokuapp.com/files/${user.avatar}`
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

        <Button onPress={() => logout()}>
          <ButtonText>SAIR</ButtonText>
        </Button>
      </ButtonGroup>
    </ContainerFluid>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
