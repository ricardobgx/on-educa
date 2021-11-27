import React, { useState } from 'react';
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
import { ISignFormProps } from '../SignForm/interfaces';
import SignTextInput from '../SignTextInput';

interface IUser {
  email: string;
  password: string;
}

const Login = (props: ISignFormProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [emailWarning, setEmailWarning] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordWarning, setPasswordWarning] = useState(false);

  const { loadAnimation, isStudent, userType, changeUserType } = props;

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

  const loginSucess = (token: string): void => {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('userType', userType);
    clearFields();
    window.location.reload();
  };

  const loginStudent = async (studentParams: IUser): Promise<void> => {
    await OnEducaAPI.post('/students/login', studentParams).then(
      (response) => {
        loginSucess(response.data);
      },
      () => {
        loadAnimation();
      },
    );
  };

  const loginTeacher = async (teacherParams: IUser): Promise<void> => {
    await OnEducaAPI.post('/teachers/login', teacherParams).then(
      (response) => {
        loginSucess(response.data);
      },
      () => {
        loadAnimation();
      },
    );
  };

  const loginUser = async (): Promise<void> => {
    if (fieldsIsValid()) {
      const userParams = {
        email,
        password,
      } as IUser;

      loadAnimation();

      if (isStudent()) await loginStudent(userParams);
      else await loginTeacher(userParams);
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
          isActive={emailWarning}
          setIsActive={setEmailWarning}
          label="Informe seu e-mail"
        />
        <SignTextInput
          id="password-input"
          spellCheck={false}
          type="password"
          placeholder="Senha"
          value={password}
          setValue={setPassword}
          isActive={passwordWarning}
          setIsActive={setPasswordWarning}
          label="Informe sua senha"
        />
      </SignFieldsBox>
      <SignActions>
        <SignButton
          onClick={() => {
            loginUser();
          }}
        >
          <SignButtonLabel>Entrar</SignButtonLabel>
        </SignButton>
        <ChangeSignUser
          onClick={() => {
            changeUserType();
            clearFields();
          }}
        >
          <ChangeSignUserLabel>
            Sou
            {isStudent() ? ' professor' : ' aluno'}
          </ChangeSignUserLabel>
        </ChangeSignUser>
      </SignActions>
    </SignBox>
  );
};

export default Login;
