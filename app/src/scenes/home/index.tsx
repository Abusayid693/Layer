import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useDispatch } from 'react-redux';
import { ClassificationCard, SavedModelCard } from '../../components';
import { ACCESS_TOKEN_KEY } from '../../hoc/auth';
import { setAuthSliceState } from '../../store/authSlice';
import * as S from './style';

export const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const logoutUser = async () => {
    setLoading(true);
    try {
      await EncryptedStorage.removeItem(ACCESS_TOKEN_KEY);
      dispatch(
        setAuthSliceState({
          isAuthenticated: false,
          isAuthenticating: false,
          userDetails: null,
        }),
      );
      console.log('Logout success');
    } catch (error) {
      console.log('Logout error :', error);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 35}
      enabled
      style={{flex: 1}}>
        <ScrollView>
      <S.Container>
        <S.ContainerLabel>Home Page</S.ContainerLabel>
        <S.CardsContainer horizontal >
          <ClassificationCard />
          <ClassificationCard />
          <ClassificationCard />

        </S.CardsContainer>
        
        <S.ContainerLabel>Your Models</S.ContainerLabel>
        <S.SavedModelsContainer>
          <SavedModelCard isImage />
          <SavedModelCard/>
          <SavedModelCard/>
          <SavedModelCard/>
          <SavedModelCard/>
          <SavedModelCard/>
          <SavedModelCard/>
          <SavedModelCard/>
          <SavedModelCard/>
        </S.SavedModelsContainer>
      </S.Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
