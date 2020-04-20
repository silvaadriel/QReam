import styled from 'styled-components/native';

export const Title = styled.Text`
  margin: 28px;
  color: #dadada;
  font-size: 40px;
  text-align: left;
  letter-spacing: -0.5px;
`;

export const TransactionInformationContainer = styled.View`
  flex: 1;
  margin: 0 28px;
  align-items: center;
  justify-content: center;
`;

export const TransactionInformation = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TransactionInformationKey = styled.Text`
  color: #bebebf;
  font-size: 20px;
  letter-spacing: -0.5px;
`;

export const TransactionInformationValue = styled.Text`
  color: #dadada;
  font-size: 30px;
  letter-spacing: -0.5px;
`;

export const Footer = styled.View`
  margin: 0 55px;
  margin-bottom: 60px;
`;
