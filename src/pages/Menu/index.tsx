import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../Router';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';

import {
  BackButton,
  Button,
  ButtonGroup,
  ButtonText,
  User,
  UserName
} from './styles';

type ShowQRCodeNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

type Props = {
  navigation: ShowQRCodeNavigationProp;
};

const Menu: React.FC<Props> = ({navigation}) => {
  return (
    <ContainerFluid>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" color="#DADADA70" size={48} />
        </BackButton>
      </Header>
      <User>
        <Icon name="account-circle" color="#B8B8B9" size={95} />
        <UserName>Thiago Lima</UserName>
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
        <Button onPress={() => navigation.navigate('Login')}>
          <ButtonText>SAIR</ButtonText>
        </Button>
      </ButtonGroup>
    </ContainerFluid>
  );
};

export default Menu;
