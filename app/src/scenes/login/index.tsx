import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import * as Yup from 'yup';
import { login } from '../../services';
import * as S from './style';
//
import { FormOne } from './formOne';
import { FormTwo } from './formTwo';

const Stack = createNativeStackNavigator();

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Invalid email'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), 'null'], 'Passwords must match'),
});

export const Login = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const onSubmit = async (values: any) => {
    console.log('values :', values);

    try {
      const {data} = await login({
        email: 'hhhsdss@rean.com',
        password: 'gjgsjhbjbjhbj',
      });
      console.log('login :', data);
    } catch (error) {
      console.log('error :', error);
    }
  };

  const renderContent = () => {
    if (screenIndex === 0) return <FormOne setScreenIndex={setScreenIndex} />;
    if (screenIndex === 1) return <FormTwo setScreenIndex={setScreenIndex} />;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 35}
      enabled
      style={{flex: 1}}>
      <S.Container
        style={{
          justifyContent: screenIndex === 1 ? 'space-between' : 'flex-start',
        }}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          initialErrors={{email: 'Required'}}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({handleChange, handleBlur, handleSubmit, values}) =>
            renderContent()
          }
        </Formik>
      </S.Container>
    </KeyboardAvoidingView>
  );
};
