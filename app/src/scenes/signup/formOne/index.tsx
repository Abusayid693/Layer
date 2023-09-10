import { useNavigation } from '@react-navigation/native';
import { useFormikContext } from 'formik';
import React from 'react';
import { Button, ButtonLight, Input } from '../../../components';
import * as S from '../style';

export const FormOne = ({setScreenIndex}:any) => {
  const navigation = useNavigation();

  const {submitForm, errors, setFieldTouched} = useFormikContext();

  return (
    <React.Fragment>
      <S.ContentContainer style={{height:"50%"}} >
        <S.ContentText>What's your full name</S.ContentText>
        <S.InputGroupContainer  >
        <Input name="firstName" isGroup label="First Name" />
        <Input name="lastName" isGroup label="Last Name" />

        </S.InputGroupContainer>
      </S.ContentContainer>
      
      <S.MainContainer>
      <Button
        onPress={() => {
          submitForm();
          
        }}>
        Next
      </Button>
      <ButtonLight onPress={()=>navigation.navigate("Login" as never)}>
        Login
      </ButtonLight>
      </S.MainContainer>
    </React.Fragment>
  );
};
