/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles';
import LoadAnimation from './components/App/LoadAnimation';
import {
  clearPeopleVariables,
  getPeople,
  setAplicationTheme,
  setUpPeopleType,
} from './functions/people';
import Routes from './Routes';
import OnEducaAPI from './services/api';
import { ActionCreators, RootState } from './store';
import { ThemeType } from './types/ThemeType';
import { stringToBoolean } from './functions/utils';
import { getFriendRequestsByPeople } from './functions/friendRequest';
import NavBar from './components/App/NavBar';
import FloatNotification from './components/App/FloatNotification';
import { findTheme } from './utils/application';
import { DEFAULT_THEME } from './static/defaultEntitiesValues';
import { isAuthenticated } from './utils/people';

export const socket = io(process.env.REACT_APP_API_URL || '');
socket.on('connect', () =>
  console.log('[IO] A new connection has been established'),
);

const App: React.FC = () => {
  /* GlobalRootState */

  const {
    aplication,
    theme,
    floatNotification,
    people: loggedPeople,
  } = useSelector((store: RootState) => store);

  const { loadingAnimation } = aplication;
  const { isActive: floatNotificationIsActive } = floatNotification;

  const dispatch = useDispatch();
  const {
    loginPeople,
    loadIsStudent,
    loadToken,
    loadTheme,
    loadStudent,
    loadTeacher,
    loadFriendRequests,
    enableLoadingAnimation,
    disableLoadingAnimation,
  } = bindActionCreators(ActionCreators, dispatch);

  const [localVariablesLoaded, setLocalVariablesLoaded] = useState(false);

  /* Functions */

  const setupFriendRequestsData = async (
    id: string,
    token: string,
  ): Promise<void> => {
    const friendRequests = await getFriendRequestsByPeople(
      OnEducaAPI,
      id,
      token,
    );

    loadFriendRequests(friendRequests);
  };

  const setupPeopleData = async (
    id: string,
    token: string,
    isStudent: boolean,
  ): Promise<void> => {
    enableLoadingAnimation();

    await setUpPeopleType(
      OnEducaAPI,
      id,
      isStudent,
      token,
      loadStudent,
      loadTeacher,
    );

    const people = await getPeople(OnEducaAPI, id, token);
    if (!people) return;

    loginPeople(people);

    setupFriendRequestsData(id, token);

    disableLoadingAnimation();
  };

  const setupTheme = (): void => {
    // Procurando por tema existente
    const localTheme = window.localStorage.getItem('theme') || -1;
    let themeType = Number(localTheme);

    // Tratando tema
    if (themeType === -1 || !findTheme(themeType)) {
      themeType = ThemeType.LIGHT_PURPLE;
    }

    // Carregando tema
    loadTheme(findTheme(themeType) || DEFAULT_THEME);
    setAplicationTheme(themeType);
  };

  const setupPeopleVariables = async (): Promise<void> => {
    // Pegando variaveis
    const id = window.localStorage.getItem('id') || '';
    const token = window.localStorage.getItem('token') || '';
    const localIsStudent = window.localStorage.getItem('isStudent') || 'true';

    // Tratando variaveis
    const isStudent = stringToBoolean(localIsStudent);

    // Logando usuário
    if (id && token) {
      loadIsStudent(isStudent);
      loadToken(token);
      await setupPeopleData(id, token, isStudent);
    } else clearPeopleVariables();
  };

  /** ********************************
   * Deixa a aplicação pronta para uso
   ********************************* */
  const setupApplicationData = (): void => {
    // Procurando por login existente
    setupPeopleVariables();

    // Definindo tema
    setupTheme();

    // Sinalizando carregamento completo
    setLocalVariablesLoaded(true);

    // disableLoadingAnimation();
  };

  useEffect(() => {
    if (!localVariablesLoaded) {
      setupApplicationData();
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {loadingAnimation && <LoadAnimation />}
          <GlobalStyle />
          {floatNotificationIsActive && <FloatNotification />}
          {isAuthenticated(loggedPeople) ? <NavBar /> : null}
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
