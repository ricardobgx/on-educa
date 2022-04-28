/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import { AxiosInstance } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
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
import { themes } from './static/themes';
import { stringToBoolean } from './functions/utils';
import { getFriendRequestsByPeople } from './functions/friendRequest';

export const socket = io(process.env.REACT_APP_API_URL || '');
socket.on('connect', () =>
  console.log('[IO] A new connection has been established'),
);

const App = (): JSX.Element => {
  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);
  const { loadingAnimation } = aplication;

  const dispatch = useDispatch();
  const {
    loginPeople,
    loadIsStudent,
    loadToken,
    loadTheme,
    loadStudent,
    loadTeacher,
    loadFriendRequests,
  } = bindActionCreators(ActionCreators, dispatch);

  const [localVariablesLoaded, setLocalVariablesLoaded] = useState(false);

  /* Functions */

  const login = async (
    API: AxiosInstance,
    id: string,
    isStudent: boolean,
    token: string,
  ): Promise<void> => {
    await setUpPeopleType(
      OnEducaAPI,
      id,
      isStudent,
      token,
      loadStudent,
      loadTeacher,
    );
    const people = await getPeople(API, id, token);
    if (!people) return;

    loginPeople(people);
    const friendRequests = await getFriendRequestsByPeople(
      OnEducaAPI,
      id,
      token,
      (fr: IFriendRequest[]) => console.log('hi'),
    );

    loadFriendRequests(friendRequests);
  };

  const loadLocalVariables = (): void => {
    // Pegando variaveis
    const id = window.localStorage.getItem('id') || '';
    const token = window.localStorage.getItem('token') || '';
    const localIsStudent = window.localStorage.getItem('isStudent') || 'true';
    const localTheme = window.localStorage.getItem('theme') || -1;

    // Tratando variaveis
    const isStudent = stringToBoolean(localIsStudent);
    const theme = Number(localTheme);

    // Logando usuário
    if (id && token) {
      loadIsStudent(isStudent);
      loadToken(token);
      login(OnEducaAPI, id, isStudent, token);
    } else clearPeopleVariables();

    // Carregando tema
    if (theme !== -1) {
      loadTheme(theme);
    } else {
      loadTheme(ThemeType.BLUE);
      setAplicationTheme(ThemeType.BLUE);
    }

    // Sinalizando carregamento completo
    setLocalVariablesLoaded(true);
  };

  useEffect(() => {
    if (!localVariablesLoaded) {
      loadLocalVariables();
    }
  }, []);

  return (
    <>
      {loadingAnimation && <LoadAnimation />}
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
