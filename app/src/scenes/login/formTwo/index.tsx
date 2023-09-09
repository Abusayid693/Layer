import { useFormikContext } from 'formik';
import React from 'react';
import { BackButton, Button, Input } from '../../../components';
import * as S from '../style';

export const FormTwo = () => {
  const {submitForm} = useFormikContext();

  return (
    <React.Fragment>
      <S.ContentContainer>
        <BackButton />
        <S.ContentText>Enter your password! </S.ContentText>
      </S.ContentContainer>
      <Input name="password" type="password" label="Password" />
      <Input name="confirmPassword" type="password" label="Confirm Password" />
      <Button onPress={submitForm}>Submit</Button>
    </React.Fragment>
  );
};
