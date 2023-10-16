import React from 'react';
import { Dropdown } from '../../../../components/dropdown';
import * as S from '../style';


export const FormTwo = () => {

  return (
    <S.FormContainer>
      <S.FormLabel style={{marginBottom:8}} >Select Optimizer</S.FormLabel>
      <Dropdown name="optimizer" />
    </S.FormContainer>
  );
};
