import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface SubmitButtonProps {
  handleSubmit: void;
  label: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  handleSubmit,
  label,
}: SubmitButtonProps) => {
  return (
    <TouchableOpacityStyled onPress={handleSubmit}>
      <Label>{label}</Label>
    </TouchableOpacityStyled>
  );
};

export default SubmitButton;

const TouchableOpacityStyled = styled(TouchableOpacity)`
  margin-top: 40px;
  width: 180px;
  height: 48px;
  border-width: 1px;
  border-radius: 8px;
  justify-content: center;
  align-self: center;
`;

const Label = styled(Text)`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;
