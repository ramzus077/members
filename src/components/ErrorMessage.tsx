import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import theme from '../theme';

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({
  errorMessage,
}: ErrorMessageProps) => {
  return (
    <Wrapper>
      <ErrorIcon source={require('../../assets/error.png')} />
      <ErrorMessageStyled color={theme.colors.RED}>
        {errorMessage}
      </ErrorMessageStyled>
    </Wrapper>
  );
};

export default ErrorMessage;

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const ErrorIcon = styled(Image)`
  width: 15px;
  height: 15px;
`;

interface ErrorMessageStyledProps {
  color: string;
}

const ErrorMessageStyled = styled(Text)<ErrorMessageStyledProps>`
  font-size: 12px;
  margin-left: 5px;
  color: ${({color}: ErrorMessageStyledProps) => color};
`;
