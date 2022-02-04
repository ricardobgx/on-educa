import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  SignBox,
  SignLabel,
  SignFieldsBox,
  SignActions,
  SignButton,
  SignButtonLabel,
} from '../components';
import OnEducaAPI from '../../../../services/api';
import SignTextInput from '../SignTextInput';
import { ActionCreators, State } from '../../../../store';
import {
  getPeople,
  loginPeople,
  setPeopleVariables,
  setUpPeopleType,
} from '../../../../functions/people';
import { ILogin } from '../../../../interfaces/ILogin';
import { IAuthenticationResponse } from '../../../../interfaces/IAuthenticationResponse';

const Login = (): JSX.Element => {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { isStudent } = aplication;

  const dispatch = useDispatch();
  const {
    enableLoadingAnimation,
    disableLoadingAnimation,
    loginPeople: loadPeople,
    loadToken,
    loadIsStudent,
    loadStudent,
    loadTeacher,
  } = bindActionCreators(ActionCreators, dispatch);

  /* Local State */

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fieldsIsValid = (): boolean => {
    if (email.trim() === '' || password.trim() === '' || password.length < 8)
      return false;
    return true;
  };

  const loginSucess = async (
    authResponse: IAuthenticationResponse,
  ): Promise<void> => {
    const { id, token } = authResponse;

    loadToken(token);
    loadIsStudent(isStudent);

    setPeopleVariables(id, isStudent, token);
    await setUpPeopleType(
      OnEducaAPI,
      id,
      isStudent,
      token,
      loadStudent,
      loadTeacher,
    );

    await getPeople(OnEducaAPI, id, loadPeople, token);
  };

  const loginError = (): void => {
    disableLoadingAnimation();
  };

  const login = async (): Promise<void> => {
    if (fieldsIsValid()) {
      const peopleParams = {
        email,
        password,
      } as ILogin;

      enableLoadingAnimation();
      await loginPeople(OnEducaAPI, peopleParams, loginSucess, loginError);
    }
  };

  return (
    <SignBox>
      <SignLabel>Entre</SignLabel>
      <SignFieldsBox>
        <SignTextInput
          id="email-input"
          spellCheck={false}
          type="email"
          placeholder="E-mail"
          value={email}
          setValue={setEmail}
          icon="fas fa-envelope"
        />
        <SignTextInput
          id="password-input"
          spellCheck={false}
          type="password"
          placeholder="Senha"
          value={password}
          setValue={setPassword}
          icon="fas fa-lock"
        />
      </SignFieldsBox>
      <SignActions>
        <SignButton
          onClick={() => {
            login();
          }}
        >
          <SignButtonLabel>Entrar</SignButtonLabel>
        </SignButton>
      </SignActions>
    </SignBox>
  );
};

export default Login;
