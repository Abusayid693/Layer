import { useFormikContext } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { BackButton, Button, Input } from '../../../components';
import * as S from '../style';

export const FormTwo = ({setScreenIndex}:any) => {
  const {submitForm} = useFormikContext();

  return (
    <React.Fragment>
      <S.ContentContainer style={{height:"50%"}} >
        <View>
          <BackButton onPress={()=> setScreenIndex(0)} />
          <S.ContentText>What's your email</S.ContentText>
        </View>
        <View>
          <Input
            name="email"
            type="Email"
            label="Email"
          />
        </View>
      </S.ContentContainer>

      <S.MainContainer>
        <Button onPress={submitForm}>Next</Button>
      </S.MainContainer>
    </React.Fragment>
  );
};
