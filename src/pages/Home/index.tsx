import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { ApplicationState } from '../../store';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';

import TileButton from './TileButton';

import payWithQRCodeIcon from '../../assets/payWithQRCodeIcon.png';
import receiveWithQRCodeIcon from '../../assets/receiveWithQRCodeIcon.png';

import {
  AvatarImage,
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

const Home: React.FC = () => {
  const [hideBalance, setHideBalance] = useState(false);

  const user = useSelector((state: ApplicationState) => state.user.data);

  const navigation = useNavigation();

  const userFirstName = useMemo(() => user.name.split(' ')[0], [user.name]);

  return (
    <ContainerFluid>
      <Header>
        <User onPress={() => navigation.navigate('Menu')}>
          <UserGreeting>Olá, {userFirstName}</UserGreeting>
          {user.avatar ? (
            <AvatarImage
              source={{
                uri: `https://qream-api.herokuapp.com/files/${user.avatar}`
              }}
            />
          ) : (
              <Icon name="account-circle" color="#B8B8B9" size={52} />
            )}
        </User>
      </Header>

      <BalanceContainer>
        <BalanceLabel>Saldo disponível</BalanceLabel>

        <BalanceAvailable>
          <BalanceCurrency>R$</BalanceCurrency>

          {hideBalance ? <HideBalance /> : null}

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
          icon={payWithQRCodeIcon}
          onPress={() =>
            navigation.navigate('InformValue', {
              transactionType: 'pay'
            })
          }
        >
          Pagar com Código QR
        </TileButton>

        <TileButton
          icon={receiveWithQRCodeIcon}
          onPress={() =>
            navigation.navigate('InformValue', {
              transactionType: 'receive'
            })
          }
        >
          Receber com Código QR
        </TileButton>
      </TileButtonContainer>
    </ContainerFluid>
  );
};

export default Home;
