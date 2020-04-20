import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../Router';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';
import TileButton from '../../components/TileButton';

import payWithQRCodeIcon from '../../assets/payWithQRCodeIcon.png';
import receiveWithQRCodeIcon from '../../assets/receiveWithQRCodeIcon.png';

import {
  Balance,
  BalanceAvailable,
  BalanceContainer,
  BalanceCurrency,
  BalanceLabel,
  HideBalance,
  TileButtonContainer,
  User,
  UserGreeting
} from './styles';

type ShowQRCodeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ShowQRCodeNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <ContainerFluid>
      <Header>
        <User onPress={() => navigation.navigate('Menu')}>
          <UserGreeting>Olá, Thiago</UserGreeting>
          <Icon name="account-circle" color="#B8B8B9" size={52} />
        </User>
      </Header>
      <BalanceContainer>
        <BalanceLabel>Saldo disponível</BalanceLabel>
        <BalanceAvailable>
          <BalanceCurrency>R$</BalanceCurrency>
          {hideBalance && <HideBalance />}
          <Balance hideBalance={hideBalance}>50,00</Balance>
          <Icon
            onPress={() => setHideBalance(!hideBalance)}
            name={hideBalance ? 'visibility' : 'visibility-off'}
            color="#2699DA"
            size={28}
          />
        </BalanceAvailable>
      </BalanceContainer>
      <TileButtonContainer>
        <TileButton
          onPress={() =>
            navigation.navigate('InformValue', {
              transactionType: 'pay'
            })
          }
          label="Pagar com Código QR"
          icon={payWithQRCodeIcon}
        />
        <TileButton
          label="Receber com Código QR"
          icon={receiveWithQRCodeIcon}
          onPress={() =>
            navigation.navigate('InformValue', {
              transactionType: 'receive'
            })
          }
        />
      </TileButtonContainer>
    </ContainerFluid>
  );
};

export default Home;
