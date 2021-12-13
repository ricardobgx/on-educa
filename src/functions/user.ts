/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosInstance } from 'axios';
import { IAuthenticationResponse } from '../interfaces/IAuthenticationResponse';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';

/* Application functions */

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
  window.localStorage.removeItem('userType');
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
