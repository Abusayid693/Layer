import { useFormikContext } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { BackButton, Button, Input } from '../../../components';
import * as S from '../style';

export const FormTwo = ({setScreenIndex}:any) => {
  const {submitForm} = useFormikContext();

  return (
    <React.Fragment>
      <S.ContentContainer >
        <View>
          <BackButton onPress={()=> setScreenIndex(0)} />
          <S.ContentText>Sign in to your account</S.ContentText>
        </View>
        <View>
          <Input name="password" type="password" label="Password" />
          <Input
            name="confirmPassword"
            type="password"
            label="Confirm Password"
          />
        </View>
      </S.ContentContainer>

      <S.MainContainer>
        <Button onPress={submitForm}>Submit</Button>
      </S.MainContainer>
    </React.Fragment>
  );
};
