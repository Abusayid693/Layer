import { useField } from 'formik';
import React from 'react';
import * as S from './style';

export const Input = ({name, label, isGroup ,...any}: any) => {
  const [field, {error, touched}, helpers] = useField({name});

  const isError = !!(error && touched)

  return (
    <S.Container isGroup={isGroup} >
      <S.Label>{label}</S.Label>
      <S.InputContainer
        {...any}
        onChangeText={helpers.setValue}
        onBlur={() => helpers.setTouched(!touched)}
        value={field.value}
        isError={!!(error && touched)}
      />
     {isError && <S.ErrorLabel>{error}</S.ErrorLabel>}
    </S.Container>
  );
};
