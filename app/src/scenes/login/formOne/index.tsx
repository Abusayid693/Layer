import { useNavigation } from '@react-navigation/native';
import { useFormikContext } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, ButtonLight, Input } from '../../../components';
import * as S from '../style';

export const FormOne = ({setScreenIndex}:any) => {
  const navigation = useNavigation();

  const {validateForm, errors, setFieldTouched} = useFormikContext();

  return (
    <React.Fragment>
      <S.ContentContainer style={{height:"50%"}} >
        <S.ContentText>Sign in to your account</S.ContentText>
        <View>
        <Input name="email" label="Email" />
        </View>
      </S.ContentContainer>
      
      <S.MainContainer>
      <Button
        onPress={async () => {
          validateForm();
          setFieldTouched("email")
          // @ts-ignore
          if (!errors['email']) {
            setScreenIndex(1)
          }
        }}>
        Next
      </Button>
      <ButtonLight>
        Sign up
      </ButtonLight>
      </S.MainContainer>
    </React.Fragment>
  );
};
