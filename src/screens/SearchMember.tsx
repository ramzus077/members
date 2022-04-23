import { Theme, useNavigation } from "@react-navigation/native";
import React, { FC, useState } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import theme from "../theme";
import { Member } from "../types";

const SearchMember: FC = ({ route }: any): JSX.Element => {
  const [memberName, setMemberName] = useState<string>("");
  const cartItems = useSelector((state) => state);
  const navigation = useNavigation();

  const renderItem = ({ item, index }: { item: Member; index: number }) => (
    <MemberRow
      index={index}
      theme={theme}
      onPress={() =>
        navigation.navigate("MemberInfo", {
          id: item.id,
        })
      }
    >
      <Text style={{ fontSize: 18 }}>{item.name}</Text>
      <ChevronRightIcon source={require("../../assets/rightarrow.png")} />
    </MemberRow>
  );
  console.log(memberName);
  return (
    <ScrollViewStyled backgroundColor={theme.colors.WHITE}>
      <Text>Search member</Text>
      <TextInputStyled
        backgroundColor={theme.colors.GRAY.LIGHT_GRAY_2}
        borderColor={theme.colors.GRAY.MEDIUM_GRAY}
        placeholder={"Name"}
        onChangeText={(name: string) => setMemberName(name)}
        value={memberName}
      />
      <View style={{ marginTop: 15 }} />
      <FlatList
        data={cartItems.members?.filter((member: any) => {
          return member.name.toLowerCase().includes(memberName.toLowerCase());
        })}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollViewStyled>
  );
};

function mapStateToPropos(state: any) {
  return {
    members: state.members,
    isLoading: state.isLoading,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(mapStateToPropos, mapDispatchToProps)(SearchMember);

interface TextInputStyledProps {
  backgroundColor: string;
  borderColor: string;
}

const TextInputStyled = styled(TextInput)<TextInputStyledProps>`
  width: 100%;
  height: 48px;
  padding-left: 5px;
  border-width: 1px;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${({ backgroundColor }: TextInputStyledProps) =>
    backgroundColor};
  border-color: ${({ borderColor }: TextInputStyledProps) => borderColor};
`;

interface ScrollViewStyledProps {
  backgroundColor: string;
}

const ScrollViewStyled = styled(ScrollView)<ScrollViewStyledProps>`
  background-color: ${({ backgroundColor }: ScrollViewStyledProps) =>
    backgroundColor};
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

interface MemberRowProps {
  theme: Theme;
  index: number;
}

const MemberRow = styled(TouchableOpacity)<MemberRowProps>`
  background-color: ${({ index }: MemberRowProps) =>
    index % 2 ? theme.colors.GRAY.LIGHT_GRAY : theme.colors.GRAY.LIGHT_GRAY_2};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;
  border-radius: 8px;
  padding-right: 5px;
  padding-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  min-height: 48px;
  width: 100%;
`;

const ChevronRightIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;
