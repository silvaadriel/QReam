import styled from 'styled-components/native';

interface OwnProps {
  hideBalance: boolean;
}

type Props = OwnProps;

export const User = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
`;

export const UserGreeting = styled.Text`
  color: #e5e7e8;
  font-size: 18px;
  margin-right: 15px;
`;

export const BalanceContainer = styled.View`
  margin: 30px 20px;
  align-items: center;
`;

export const BalanceLabel = styled.Text`
  color: #dadada;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 20px;
  align-self: flex-start;
`;

export const BalanceAvailable = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceCurrency = styled.Text`
  color: #dadada;
  font-size: 24px;
  letter-spacing: -0.5px;
`;

export const Balance = styled.Text<Props>`
  margin: 0 10px;
  color: #dadada;
  opacity: ${({hideBalance}) => (hideBalance ? 0 : 1)};
  font-size: 68px;
  letter-spacing: -0.5px;
`;

export const HideBalance = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 40px;
  border-top-width: 2px;
  border-top-color: #dadada;
  z-index: 5;
`;

export const TileButtonContainer = styled.View`
  flex: 1;
  margin: 40px 6px;
  flex-direction: row;
  justify-content: center;
`;
