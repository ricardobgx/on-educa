/* eslint-disable react-hooks/exhaustive-deps */

import { AxiosInstance } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import GlobalStyle from './components';
import LoadAnimation from './components/App/LoadAnimation';
import {
  clearUserVariables,
  getUser,
  setAplicationTheme,
} from './functions/user';
import { IUser } from './interfaces/IUser';
import Routes from './Routes';
import OnEducaAPI from './services/api';
import { ActionCreators, State } from './store';

function App(): JSX.Element {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { loadingAnimation } = aplication;

  const dispatch = useDispatch();
  const { loginUser, loadUserType, loadToken, loadTheme } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Functions */

  const login = async (
    API: AxiosInstance,
    userType: string,
    id: string,
    setUserState: (user: IUser) => void,
    token: string,
  ): Promise<void> => {
    await getUser(API, userType, id, setUserState, token);
  };

  useEffect(() => {
    const id = window.localStorage.getItem('id') || '';
    const token = window.localStorage.getItem('token') || '';
    const userType = window.localStorage.getItem('userType') || '';
    const theme = window.localStorage.getItem('theme') || '';

    if (id && token && userType) {
      loadUserType(userType);
      loadToken(token);
      login(OnEducaAPI, userType, id, loginUser, token);
    } else clearUserVariables();

    if (!theme) {
      loadTheme('light');
      setAplicationTheme('light');
    } else loadTheme(theme);
  }, []);

  return (
    <>
      {loadingAnimation && <LoadAnimation />}
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
