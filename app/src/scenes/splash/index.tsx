import React from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, Text } from 'react-native';
import * as S from './style';

export const SplashScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 35}
      enabled
      style={{flex: 1}}>
      <S.Container>
        <Text>Loading....</Text>
        <ActivityIndicator size="large" color="#00ff00" />
      </S.Container>
    </KeyboardAvoidingView>
  );
};
