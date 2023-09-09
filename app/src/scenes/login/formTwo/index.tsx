import React from 'react';
import { BackButton, Button, Input } from '../../../components';
import * as S from '../style';

export const FormTwo = () => {
  return (
    <React.Fragment>
      <S.ContentContainer>
        <BackButton />
        <S.ContentText>Enter your password! </S.ContentText>
      </S.ContentContainer>
      <Input name="password" type="password" label="Password" />
      <Input name="confirmPassword" type="password" label="Confirm Password" />
      <Button >
        Submit
      </Button>
    </React.Fragment>
  );
};
