import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../../../constants/Constants';
import {
  itemExists,
  removeItem,
  saveItem,
} from '../../../helpers/LocalStorage';
import {
  ALL_COUNTRIES_PATH,
  COUNTRIES_PATH,
  LOGIN_PATH,
} from '../../../constants/routes';
export const AuthContext = React.createContext(null);

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => itemExists(AUTH_TOKEN));

  const logOut = () => {
    removeItem(AUTH_TOKEN);
    setLoggedIn(false);
    history.replace(LOGIN_PATH);
  };
  const history = useHistory();
  const logIn = token => {
    setLoggedIn(true);
    saveItem(AUTH_TOKEN, token);
    history.replace(ALL_COUNTRIES_PATH);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('Auth context is not defined');
  }
  return value;
};
