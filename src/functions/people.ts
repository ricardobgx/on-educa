/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError, AxiosInstance } from 'axios';
import { IUpdatePeopleFriendParams } from '../dto/IUpdatePeopleFriendParams';
import { DeviceType } from '../types/deviceType';
import { getStudentByPeople } from './student';
import { getTeacherByPeople } from './teacher';
import { deviceType, showErrorMessage } from './utils';

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
  let peopleNameSplited;

  try {
    peopleNameSplited = name.split(' ');
  } catch (err) {
    return surname;
  }

  // Itera sobre os nomes cortados
  for (let i = 0; i < peopleNameSplited.length; i += 1) {
    // Verifica se ainda cabe algum nome no resultado
    if (surname.length < maxNameLength) {
      // Verifica se o tamanho do nome cortado refere-se a uma juncao de nomes
      if (peopleNameSplited[i].length <= 3) {
        // Verifica se a juncao do resultado com esse nome deixa espaco para a abreviacao do proximo nome
        if (
          maxNameLength - (surname.length + peopleNameSplited[i].length + 1) >=
          2
        ) {
          surname += `${peopleNameSplited[i]} `;
        } else {
          // Em caso de nao caber eh armazenada a juncao
          unionName = ` ${peopleNameSplited[i]}`;
        }
      } else if (
        // Verifica se o nome cortado cabe no resultado sem abreviar
        peopleNameSplited[i].length + surname.length <=
        maxNameLength
      ) {
        surname += `${peopleNameSplited[i]} `;
      } else if (
        // Verifica se a abreviacao do nome cortado com uma juncao de nomes, caso exista, cabe no resultado
        maxNameLength - surname.length >=
        unionName.length + 2
      ) {
        surname += `${unionName + peopleNameSplited[i][0]}. `;
        // Limpa a variavel que armazena a juncao de nomes
        unionName = '';
      }
    }
  }

  // Retorna o nome abreviado
  return surname;
};

// Logged people id is equal compared people id

export const isPeopleLogged = (
  loggedPeopleId: string,
  comparedPeopleId: string,
): boolean => {
  return loggedPeopleId === comparedPeopleId;
};

// Invert people type

export const invertPeopleType = (isStudent: boolean): boolean => !isStudent;
// People local storage variables

export const setPeopleVariables = (
  id: string,
  isStudent: boolean,
  token: string,
): void => {
  window.localStorage.setItem('id', id);
  window.localStorage.setItem('isStudent', isStudent.toString());
  window.localStorage.setItem('token', token);
};

export const clearPeopleVariables = (): void => {
  window.localStorage.removeItem('id');
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('isStudent');
};

// Aplication theme variable

export const setAplicationTheme = (theme: number): void => {
  window.localStorage.setItem('theme', theme.toString());
};

/* API functions */

const entityPath = 'peoples';

// Login

export const loginPeople = async (
  API: AxiosInstance,
  loginParams: ILogin,
  showFloatNotification: (content: string) => void,
): Promise<IAuthenticationResponse | null> => {
  let authResponseData = null;

  await API.post(`/${entityPath}/login`, loginParams)
    .then((response) => {
      authResponseData = response.data;
    })
    .catch((err) => {
      showErrorMessage(err, showFloatNotification);
    });

  return authResponseData;
};

// Create

export const registerPeople = async (
  API: AxiosInstance,
  peopleParams: any,
  registerSucess: (people: IPeople) => void,
  registerError: () => void,
): Promise<void> => {
  await API.post(`/${entityPath}/`, peopleParams).then(
    (response) => registerSucess(response.data),
    () => registerError(),
  );
};

// Find by Email

export const getPeople = async (
  API: AxiosInstance,
  id: string,
  token: string,
): Promise<IPeople | undefined> => {
  const { data } = await API.get(`/${entityPath}/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

// Find all

export const getPeoples = async (
  API: AxiosInstance,
  setPeopleState: (people: IPeople[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/${entityPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setPeopleState(response.data);
  });
};

// Update people

export const updatePeople = async (
  API: AxiosInstance,
  id: string,
  peopleParams: any,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/${entityPath}/${id}`, peopleParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => updateSucess(),
    () => updateError(),
  );
};

export const addPeopleFriend = async (
  API: AxiosInstance,
  id: string,
  peopleParams: IUpdatePeopleFriendParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/${entityPath}/${id}/addFriend`, peopleParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => updateSucess(),
    () => updateError(),
  );
};

export const removePeopleFriend = async (
  API: AxiosInstance,
  id: string,
  peopleParams: IUpdatePeopleFriendParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/${entityPath}/${id}/removeFriend`, peopleParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => updateSucess(),
    () => updateError(),
  );
};

export const setUpPeopleType = async (
  API: AxiosInstance,
  peopleId: string,
  isStudent: boolean,
  token: string,
  setStudent: (value: IStudent) => void,
  setTeacher: (value: ITeacher) => void,
): Promise<void> => {
  if (isStudent) {
    await getStudentByPeople(API, peopleId, setStudent, token);
  } else {
    await getTeacherByPeople(API, peopleId, setTeacher, token);
  }
};

export const isPeopleFriend = (peoples: IPeople[], peopleId: string): boolean =>
  !!peoples.find((people) => people.id === peopleId);
