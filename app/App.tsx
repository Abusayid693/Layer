import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import { TabBar } from "./src/components/tabBar";
import { HomePage } from './src/scenes/home';
import { Login } from './src/scenes/login';
import { SignUp } from './src/scenes/signup';
import { SplashScreen } from './src/scenes/splash';
import store from './src/store';

import { Layout } from './src/hoc/auth';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator(); 

const AuthenticatedRoutes = () => {
  return (
    <Tab.Navigator initialRouteName={'home'} tabBar={props => <TabBar {...props} />} >
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="analytics" component={HomePage} />
    <Tab.Screen name="notes" component={HomePage} />
    <Tab.Screen name="settings" component={HomePage} />
    </Tab.Navigator>
  );
};

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
          {isAuthenticated ? (
            <AuthenticatedRoutes />
          ) : (
            <Stack.Navigator
              screenOptions={{
                // headerShown: false,
                headerBackVisible: false,
              }}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          )}
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
