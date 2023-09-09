import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme
} from 'react-native';
import * as S from './style';

//
import { FormOne } from './formOne';
import { FormTwo } from './formTwo';

const Stack = createNativeStackNavigator();

export const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'red',
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{height: '100%'}}>
      
        <S.Container>
          <Formik
            initialValues={{
              email: 'abc@a.co',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => console.log(values)}>
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
