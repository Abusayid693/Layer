import React from 'react';
import { KeyboardAvoidingView, Platform, Text } from 'react-native';
import * as S from './style';

export const HomePage = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 35}
      enabled
      style={{flex: 1}}>
      <S.Container>
        <Text>Home Page</Text>
      </S.Container>
    </KeyboardAvoidingView>
  );
};
