import { useField } from 'formik';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown as Default } from 'react-native-element-dropdown';
import * as S from './style';

const data = [
  {label: 'Sgd', value: 'sgd'},
  {label: 'Adam', value: 'adam'},
];

export const Dropdown = ({name, label}: any) => {
  const [isFocus, setIsFocus] = useState(false);

  const [field, {error, touched}, helpers] = useField({name});

  const isError = !!(error && touched);

  return (
    <S.Container isGroup={false}>
      {label && <S.Label>{label}</S.Label>}
      <Default
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        search={false}
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={field.value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: any) => {
          helpers.setValue(item.value);
          setIsFocus(false);
        }}
      />
      {isError && <S.ErrorLabel>{error}</S.ErrorLabel>}
    </S.Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
