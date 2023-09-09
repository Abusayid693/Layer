import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Input } from '../../../components';
import * as S from '../style';

export const FormOne = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <S.ContentContainer>
        <S.ContentText>Login!</S.ContentText>
      </S.ContentContainer>
      <Input name="email" label="Email" />
      <Button onPress={() => navigation.navigate('FormTwo' as never)}>
        Next
      </Button>
    </React.Fragment>
  );
};
