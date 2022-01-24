import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  SignBox,
  SignLabel,
  SignFieldsBox,
  SignActions,
  SignButton,
  ChangeSignUser,
  SignButtonLabel,
  ChangeSignUserLabel,
} from '../components';
import OnEducaAPI from '../../../../services/api';
import SignTextInput from '../SignTextInput';
import { ActionCreators, State } from '../../../../store';
import {
  getUser,
  invertUserType,
  isStudent,
  loginUser,
  setUserVariables,
} from '../../../../functions/user';
import { ILogin } from '../../../../interfaces/ILogin';
import { IAuthenticationResponse } from '../../../../interfaces/IAuthenticationResponse';

const Login = (): JSX.Element => {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { userType } = aplication;

  const dispatch = useDispatch();
  const {
    enableLoadingAnimation,
    disableLoadingAnimation,
    loginUser: loadUser,
    loadToken,
    loadUserType,
  } = bindActionCreators(ActionCreators, dispatch);

  /* Local State */

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login

  const clearFields = (): void => {
    setEmail('');
    setPassword('');
  };

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

    setUserVariables(id, userType, token);

    await getUser(OnEducaAPI, userType, id, loadUser, token);
  };

  const loginError = (): void => {
    disableLoadingAnimation();
  };

  const login = async (): Promise<void> => {
    if (fieldsIsValid()) {
      const userParams = {
        email,
        password,
      } as ILogin;

      enableLoadingAnimation();
      await loginUser(
        OnEducaAPI,
        userParams,
        userType,
        loginSucess,
        loginError,
      );
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
        <ChangeSignUser
          onClick={() => {
            loadUserType(invertUserType(userType));
            clearFields();
          }}
        >
          <ChangeSignUserLabel>
            Sou
            {isStudent(userType) ? ' professor' : ' aluno'}
          </ChangeSignUserLabel>
        </ChangeSignUser>
      </SignActions>
    </SignBox>
  );
};

export default Login;
