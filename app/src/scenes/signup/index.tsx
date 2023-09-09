import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import * as Yup from 'yup';
import * as S from './style';
//
import { FormOne } from './formOne';
import { FormThree } from "./formThree";
import { FormTwo } from './formTwo';

const Stack = createNativeStackNavigator();

const validationSchema = [
  Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
  }),
  Yup.object().shape({
    email: Yup.string().required('Required').email('Invalid email'),
  }),
  Yup.object().shape({
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), 'null'], 'Passwords must match'),
  }),
];

export const SignUp = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const onSubmit = (values: any) => {
    if(screenIndex < 2){
      setScreenIndex((prev)=> (prev+1))
      return;
    }
  };

  const renderContent = () => {
    if (screenIndex === 0) return <FormOne setScreenIndex={setScreenIndex} />;
    if (screenIndex === 1) return <FormTwo setScreenIndex={setScreenIndex} />;
    if (screenIndex === 2) return <FormThree setScreenIndex={setScreenIndex}/>
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 35}
      enabled
      style={{flex: 1}}>
      <S.Container
        style={{
          justifyContent: 'space-between',
        }}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          initialErrors={{email: 'Required'}}
          validationSchema={validationSchema[screenIndex]}
          onSubmit={onSubmit}>
          {({handleChange, handleBlur, handleSubmit, values}) =>
            renderContent()
          }
        </Formik>
      </S.Container>
    </KeyboardAvoidingView>
  );
};
