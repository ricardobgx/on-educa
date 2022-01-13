/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosInstance } from 'axios';
import { IAuthenticationResponse } from '../interfaces/IAuthenticationResponse';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import { DeviceType } from '../types/deviceType';
import { deviceType } from './utils';

/* Application functions */

export const displaySurname = (
  name: string,
  smartphoneNameLength: number,
  otherDevicesNameLength = 35,
): string => {
  // Numero maximo de caracteres no nome
  let maxNameLength = otherDevicesNameLength;

  if (deviceType() === DeviceType.SMARTPHONE) {
    maxNameLength = smartphoneNameLength;
  }

  // Variavel que armazena o nome que deve ser exibido
  let surname = '';
  // Variavel que armazena as juncoes de nome
  let unionName = '';

  // Divide o nome do usuario pelo espaco em branco
  const userNameSplited = name.split(' ');

  // Itera sobre os nomes cortados
  for (let i = 0; i < userNameSplited.length; i += 1) {
    // Verifica se ainda cabe algum nome no resultado
    if (surname.length < maxNameLength) {
      // Verifica se o tamanho do nome cortado refere-se a uma juncao de nomes
      if (userNameSplited[i].length <= 3) {
        // Verifica se a juncao do resultado com esse nome deixa espaco para a abreviacao do proximo nome
        if (
          maxNameLength - (surname.length + userNameSplited[i].length + 1) >=
          2
        ) {
          surname += `${userNameSplited[i]} `;
        } else {
          // Em caso de nao caber eh armazenada a juncao
          unionName = ` ${userNameSplited[i]}`;
        }
      } else if (
        // Verifica se o nome cortado cabe no resultado sem abreviar
        userNameSplited[i].length + surname.length <=
        maxNameLength
      ) {
        surname += `${userNameSplited[i]} `;
      } else if (
        // Verifica se a abreviacao do nome cortado com uma juncao de nomes, caso exista, cabe no resultado
        maxNameLength - surname.length >=
        unionName.length + 2
      ) {
        surname += `${unionName + userNameSplited[i][0]}. `;
        // Limpa a variavel que armazena a juncao de nomes
        unionName = '';
      }
    }
  }

  // Retorna o nome abreviado
  return surname;
};

// Logged user id is equal compared user id

export const isUserLogged = (
  loggedUserId: string,
  comparedUserId: string,
): boolean => {
  return loggedUserId === comparedUserId;
};

// User is student

export const isStudent = (userType: string): boolean => userType === 'student';

// Invert user type

export const invertUserType = (userType: string): string =>
  isStudent(userType) ? 'teacher' : 'student';

// User local storage variables

export const setUserVariables = (
  id: string,
  userType: string,
  token: string,
): void => {
  window.localStorage.setItem('id', id);
  window.localStorage.setItem('userType', userType);
  window.localStorage.setItem('token', token);
};

export const clearUserVariables = (): void => {
  window.localStorage.removeItem('id');
  window.localStorage.removeItem('token');
};

// Aplication theme variable

export const setAplicationTheme = (theme: string): void => {
  window.localStorage.setItem('theme', theme);
};

/* API functions */

// Find user type

export const findUserType = async (
  API: AxiosInstance,
  id: string,
  setUser: (user: IUser) => void,
  setUserType: (userType: string) => void,
  token: string,
): Promise<void> => {
  await API.get(`/students/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (studentResponse) => {
      setUser(studentResponse.data);
      setUserType('student');
    },
    async () => {
      await API.get(`/teachers/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((teacherResponse) => {
        setUser(teacherResponse.data);
        setUserType('teacher');
      });
    },
  );
};

// Login

export const loginUser = async (
  API: AxiosInstance,
  loginParams: ILogin,
  userType: string,
  loginSucess: (authResponse: IAuthenticationResponse) => void,
  loginError: () => void,
): Promise<void> => {
  await API.post(`/${userType}s/login`, loginParams).then(
    (response) => loginSucess(response.data),
    () => loginError(),
  );
};

// Create

export const registerUser = async (
  API: AxiosInstance,
  userType: string,
  userParams: any,
  registerSucess: () => void,
  registerError: () => void,
): Promise<void> => {
  await API.post(`/${userType}s/`, userParams).then(
    () => registerSucess(),
    () => registerError(),
  );
};

// Find by Email

export const getUser = async (
  API: AxiosInstance,
  userType: string,
  id: string,
  setUserState: (user: IUser) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${userType}s/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setUserState(response.data);
  });
};

// Find all

export const getUsers = async (
  API: AxiosInstance,
  userType: string,
  setUserState: (user: IUser[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${userType}s`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setUserState(response.data);
  });
};

// Update user

export const updateUser = async (
  API: AxiosInstance,
  userType: string,
  id: string,
  userParams: any,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/${userType}s/${id}`, userParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => updateSucess(),
    () => updateError(),
  );
};
