import { useField } from 'formik';
import React from 'react';
import * as S from './style';

export const Input = ({name, label, ...any}: any) => {
  const [field, {error, touched}, helpers] = useField({name});

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputContainer
        {...any}
        onChangeText={helpers.setValue}
        onBlur={() => helpers.setTouched(!touched)}
        value={field.value}
        isError={!!(error && touched)}
      />
    </S.Container>
  );
};
