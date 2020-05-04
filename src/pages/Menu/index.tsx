import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';

import { Button, ButtonGroup, ButtonText, User, UserName } from './styles';

const Menu: React.FC = () => {
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
