import React, { useEffect, useState } from 'react';
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
  invertUserType,
  isStudent,
  registerUser,
} from '../../../../functions/user';
import TeachingType from '../TeachingType';
import { getTeachingTypes } from '../../../../functions/teachingType';
import { ITeachingType } from '../../../../interfaces/ITeachingType';
import SchoolGrade from '../SchoolGrade';
import { IUserParams } from '../../../../dto/IUserParams';

interface IRegisterProps {
  changeSignType: () => void;
}

const Register = (props: IRegisterProps): JSX.Element => {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { userType } = aplication;

  const dispatch = useDispatch();
  const { enableLoadingAnimation, disableLoadingAnimation, loadUserType } =
    bindActionCreators(ActionCreators, dispatch);

  /* Local State */

  // User

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Teacher

  const [teachingTypes, setTeachingTypes] = useState<ITeachingType[]>([]);
  const [teachingTypeId, setTeachingTypeId] = useState('');

  // Student

  const [schoolGradeId, setSchoolGradeId] = useState('');

  // Warnings

  const [nameWarning, setNameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);

  /* Props */

  const { changeSignType } = props;

  /* Functions */

  const fieldsIsValid = (): boolean => {
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      password.length < 8
    )
      return false;
    return true;
  };

  const clearFields = (): void => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const registerSucess = (): void => {
    disableLoadingAnimation();
    changeSignType();
  };

  const registerError = (): void => {
    disableLoadingAnimation();
  };

  const register = async (): Promise<void> => {
    if (!fieldsIsValid()) return;

    const defaultUserParams = {
      name,
      email,
      password,
      isOnline: true,
      profilePicture:
        'https://i.pinimg.com/564x/b3/fa/4a/b3fa4a81540be0d7da526271c7395222.jpg',
      league: 'Mestre',
      userType,
    } as IUserParams;

    const userParams = isStudent(userType)
      ? { ...defaultUserParams, schoolGradeId }
      : { ...defaultUserParams, teachingTypeId };

    enableLoadingAnimation();
    await registerUser(
      OnEducaAPI,
      userType,
      { ...userParams, teachingTypeId },
      registerSucess,
      registerError,
    );
    disableLoadingAnimation();
  };

  useEffect(() => {
    getTeachingTypes(OnEducaAPI, setTeachingTypes);
  }, []);

  return (
    <SignBox>
      <SignLabel>Cadastre-se</SignLabel>
      <SignFieldsBox>
        <SignTextInput
          id="name-input"
          spellCheck={false}
          type="text"
          placeholder="Nome"
          value={name}
          setValue={setName}
          isActive={nameWarning}
          setIsActive={setNameWarning}
          label="Informe seu nome"
        />
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
        {isStudent(userType) ? (
          <SchoolGrade
            teachingTypes={teachingTypes}
            schoolGradeSelectedId={schoolGradeId}
            setSchoolGradeSelectedId={setSchoolGradeId}
          />
        ) : (
          <TeachingType
            teachingTypes={teachingTypes}
            teachingTypeSelectedId={teachingTypeId}
            setTeachingTypeSelectedId={setTeachingTypeId}
          />
        )}
      </SignFieldsBox>
      <SignActions>
        <SignButton onClick={() => register()}>
          <SignButtonLabel>Cadastrar</SignButtonLabel>
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

export default Register;
