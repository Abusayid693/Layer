import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import { HomePage } from './src/scenes/home';
import { Login } from './src/scenes/login';
import { SignUp } from './src/scenes/signup';
import { SplashScreen } from './src/scenes/splash';
import store from './src/store';

import { Layout } from './src/hoc/auth';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const {isAuthenticated, isAuthenticating} = useSelector(
    (state: any) => state.auth,
  );

  return (
    <>
      {isAuthenticating ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              // headerShown: false,
              headerBackVisible: false,
            }}>
            {isAuthenticated ? (
              <>
                <Stack.Screen name="HomePage" component={HomePage} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const Root = () => {
  return (
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  );
};

export default Root;
