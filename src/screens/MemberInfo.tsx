import React, {FC, useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import theme from '../theme';

const MemberInfo: FC = route => {
  const memberId = route.route.params.id;
  const cartItems = useSelector(state => state);
  const selectedMember = cartItems.members?.filter(member => {
    return member.id === memberId;
  })[0];

  return (
    <ScrollViewStyled backgroundColor={theme.colors.WHITE}>
      <Label>
        Name: <Value>{selectedMember.name}</Value>
      </Label>
      <Label>
        Age:{' '}
        <Value>
          {selectedMember?.age}
          {' years old'}
        </Value>
      </Label>
      <Label>
        Email: <Value>{selectedMember?.email}</Value>
      </Label>
    </ScrollViewStyled>
  );
};

export default MemberInfo;

interface ScrollViewStyledProps {
  backgroundColor: string;
}

const ScrollViewStyled = styled(ScrollView)<ScrollViewStyledProps>`
  background-color: ${({backgroundColor}: ScrollViewStyledProps) =>
    backgroundColor};
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Label = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${theme.colors.BLACK};
`;

const Value = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.BLACK};
`;
