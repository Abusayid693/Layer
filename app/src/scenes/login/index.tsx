import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
} from 'react-native';
import * as Yup from 'yup';
import * as S from './style';

//
import { FormOne } from './formOne';
import { FormTwo } from './formTwo';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Invalid email'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), 'null'], 'Passwords must match'),
});

const Stack = createNativeStackNavigator();

export const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const onSubmit = (values:any) => {
    console.log('values :', values)
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{height: '100%'}}>
        <S.Container>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
            }}
            initialErrors={{email: 'Required'}}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name="FormOne" component={FormOne} />
                <Stack.Screen name="FormTwo" component={FormTwo} />
              </Stack.Navigator>
            )}
          </Formik>
        </S.Container>
      </ScrollView>
    </SafeAreaView>
  );
};
