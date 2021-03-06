import React, { useState, useMemo, useContext } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import { ApplicationState } from '../../store';

import ContainerFluid from '../../components/ContainerFluid';
import Header from '../../components/Header';

import TileButton from './TileButton';

import payWithQRCodeIconLight from '../../assets/payWithQRCodeIconLight.png';
import payWithQRCodeIconDark from '../../assets/payWithQRCodeIconDark.png';
import receiveWithQRCodeIconLight from '../../assets/receiveWithQRCodeIconLight.png';
import receiveWithQRCodeIconDark from '../../assets/receiveWithQRCodeIconDark.png';

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
  UserGreeting,
} from './styles';

const Home: React.FC = () => {
  const [hideBalance, setHideBalance] = useState(false);

  const user = useSelector((state: ApplicationState) => state.user.data);

  const theme = useContext(ThemeContext);

  const navigation = useNavigation();

  const userFirstName = useMemo(() => user?.name?.split(' ')[0], [
    user?.name?.split,
  ]);

  return (
    <ContainerFluid>
      <Header>
        <User onPress={() => navigation.navigate('Menu')}>
          <UserGreeting>Olá, {userFirstName}</UserGreeting>
          {user.avatar ? (
            <AvatarImage
              source={{
                uri: user.avatar_url,
              }}
            />
          ) : (
            <Icon
              name="account-circle"
              color={theme.colors.textOnSecundary}
              size={52}
            />
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
            color={theme.colors.textOnSecundary}
            size={28}
          />
        </BalanceAvailable>
      </BalanceContainer>

      <TileButtonContainer>
        <TileButton
          icon={
            theme.name === 'dark'
              ? payWithQRCodeIconDark
              : payWithQRCodeIconLight
          }
          onPress={() =>
            navigation.navigate('InformValue', {
              transactionType: 'pay',
            })
          }
        >
          Pagar com Código QR
        </TileButton>

        <TileButton
          icon={
            theme.name === 'dark'
              ? receiveWithQRCodeIconDark
              : receiveWithQRCodeIconLight
          }
          onPress={() =>
            navigation.navigate('InformValue', {
              transactionType: 'receive',
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
