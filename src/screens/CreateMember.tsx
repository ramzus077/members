import * as React from "react";
import { TextInput, ScrollView, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components/native";
import { connect } from "react-redux";

import ErrorMessage from "../components/ErrorMessage";
import SubmitButton from "../components/SubmitButton";
import theme from "../theme";
import { createMember } from "./../actions/membersActions";
import { Member } from "../types";

const CreateMember: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      age: null,
      email: "",
    },
  });
  const onSubmit = (data: Member) =>
    createMember({ ...data, id: new Date().getTime() });

  return (
    <ScrollViewStyled backgroundColor={theme.colors.WHITE}>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputStyled
            backgroundColor={theme.colors.GRAY.LIGHT_GRAY_2}
            borderColor={theme.colors.GRAY.MEDIUM_GRAY}
            placeholder={"Name"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && (
        <ErrorMessage errorMessage="The name is required and the minmum length is 3 caracters." />
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          min: 18,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputStyled
            backgroundColor={theme.colors.GRAY.LIGHT_GRAY_2}
            borderColor={theme.colors.GRAY.MEDIUM_GRAY}
            onBlur={onBlur}
            placeholder={"Age"}
            onChangeText={onChange}
            value={value}
            keyboardType={"number-pad"}
          />
        )}
        name="age"
      />
      {errors.age && (
        <ErrorMessage errorMessage="The minmum age is 18 years old." />
      )}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputStyled
            backgroundColor={theme.colors.GRAY.LIGHT_GRAY_2}
            borderColor={theme.colors.GRAY.MEDIUM_GRAY}
            onBlur={onBlur}
            placeholder={"E@mail.com"}
            onChangeText={onChange}
            value={value}
            keyboardType={"email-address"}
          />
        )}
        name="email"
      />
      {errors.email && (
        <ErrorMessage errorMessage="The email is required. It looks incorrect." />
      )}
      <SubmitButton handleSubmit={handleSubmit(onSubmit)} label={"Create"} />
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
  return {
    createMember: (newMember: {
      id: number;
      name: string;
      age: number;
      email: string;
    }) => dispatch(createMember(newMember)),
  };
}

export default connect(mapStateToPropos, mapDispatchToProps)(CreateMember);

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
  background-color: ${({ backgroundColor }: TextInputStyledProps) =>
    backgroundColor};
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;
