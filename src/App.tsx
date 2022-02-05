/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import { AxiosInstance } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import GlobalStyle from './styles';
import LoadAnimation from './components/App/LoadAnimation';
import {
  clearPeopleVariables,
  getPeople,
  setAplicationTheme,
  setUpPeopleType,
} from './functions/people';
import { IPeople } from './interfaces/IPeople';
import Routes from './Routes';
import OnEducaAPI from './services/api';
import { ActionCreators, State } from './store';
import { ThemeType } from './types/ThemeType';
import { themes } from './static/themes';
import { stringToBoolean } from './functions/utils';

function App(): JSX.Element {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { loadingAnimation } = aplication;

  const dispatch = useDispatch();
  const {
    loginPeople,
    loadIsStudent,
    loadToken,
    loadTheme,
    loadStudent,
    loadTeacher,
  } = bindActionCreators(ActionCreators, dispatch);

  /* Functions */

  const login = async (
    API: AxiosInstance,
    id: string,
    isStudent: boolean,
    setPeopleState: (value: IPeople) => void,
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
    await getPeople(API, id, setPeopleState, token);
  };

  useEffect(() => {
    const id = window.localStorage.getItem('id') || '';
    const token = window.localStorage.getItem('token') || '';
    const localIsStudent = window.localStorage.getItem('isStudent') || 'true';
    const localTheme = window.localStorage.getItem('theme');

    const isStudent = stringToBoolean(localIsStudent);
    const theme = Number(localTheme);

    if (id && token) {
      loadIsStudent(isStudent);
      loadToken(token);
      login(OnEducaAPI, id, isStudent, loginPeople, token);
    } else clearPeopleVariables();

    if (theme && themes[theme]) {
      loadTheme(theme);
    } else {
      loadTheme(ThemeType.BLUE);
      setAplicationTheme(ThemeType.BLUE);
    }
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
