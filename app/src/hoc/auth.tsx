import React, { useEffect } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useDispatch } from 'react-redux';
import { getUserDetails } from '../services';
import { setAuthSliceState } from '../store/authSlice';

export const ACCESS_TOKEN_KEY = 'access_token';

export const Layout = ({children}: any) => {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    try {
      const token = await EncryptedStorage.getItem(ACCESS_TOKEN_KEY);
      console.log(`token`, token);

      if (!token) {
        return;
      }

      const {data} = await getUserDetails();

      console.log('getUserDetails :', data);

      dispatch(setAuthSliceState({isAuthenticated: true, isAuthenticating: false}));

      //   Get my details here
    } catch (error) {
      console.log('Layout :', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};
