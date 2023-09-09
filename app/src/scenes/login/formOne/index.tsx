import { useNavigation } from '@react-navigation/native';
import { useFormikContext } from 'formik';
import React from 'react';
import { Button, ButtonLight, Input } from '../../../components';
import * as S from '../style';

export const FormOne = () => {
  const navigation = useNavigation();

  const {validateForm, errors, setFieldTouched} = useFormikContext();

  return (
    <React.Fragment>
      <S.ContentContainer>
        <S.ContentText>Login!</S.ContentText>
      </S.ContentContainer>
      <Input name="email" label="Email" />
      <Button
        onPress={async () => {
          validateForm();
          setFieldTouched("email")

          // @ts-ignore
          if (!errors['email']) {
            navigation.navigate('FormTwo' as never);
          }
        }}>
        Next
      </Button>
      <ButtonLight>
        Sign up
      </ButtonLight>
    </React.Fragment>
  );
};
