import { useFormikContext } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { BackButton, Button, Input } from '../../../components';
import * as S from '../style';

export const FormThree = ({setScreenIndex}:any) => {
  const {submitForm} = useFormikContext();

  return (
    <React.Fragment>
      <S.ContentContainer  style={{height:"50%"}} >
        <View>
          <BackButton onPress={()=> setScreenIndex(1)} />
          <S.ContentText>Set your password</S.ContentText>
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
