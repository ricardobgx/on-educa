import React, { useEffect, useState } from 'react';
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
import { IStudent } from '../../../../interfaces/IStudent';
import { ITeacher } from '../../../../interfaces/ITeacher';
import SchoolGradeSelect from '../SchoolGradeSelect';
import { IUser } from '../../../../interfaces/IUser';
import { ITeachingType } from '../../../../interfaces/ITeachingType';

const Register = (props: ISignFormProps): JSX.Element => {
  /* Global State */

  /* Local State */

  // User

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [teachingTypes, setTeachingTypes] = useState([]);
  // Student and Teacher

  const [teachingTypeId, setTeachingTypeId] = useState('');

  // Student

  const [schoolGradeId, setSchoolGradeId] = useState('');

  // Warnings

  const [nameWarning, setNameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);

  // Registro

  /* Props */

  const { isStudent, changeUserType, loadAnimation, userType } = props;

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

  const registerStudent = async (studentParams: any): Promise<void> => {
    await OnEducaAPI.post('/students/', studentParams).then(() => {
      console.log(studentParams);
    });

    loadAnimation();
  };

  const registerTeacher = async (teacherParams: ITeacher): Promise<void> => {
    await OnEducaAPI.post('/teachers/', teacherParams).then(() => {});

    console.log(teacherParams);

    loadAnimation();
  };

  const registerUser = async (): Promise<void> => {
    console.log('cadastrando');
    if (!fieldsIsValid()) return;

    const userParams = {
      name,
      email,
      password,
      isOnline: true,
      profilePicture: '',
      league: '',
    } as IUser;

    loadAnimation();

    console.log(userType);

    if (isStudent()) await registerStudent({ ...userParams, teachingTypeId });
    else await registerTeacher({ ...userParams, teachingTypeId });
  };

  const getTeachingTypes = async (): Promise<void> => {
    await OnEducaAPI.get('/teachingtypes').then((response) => {
      setTeachingTypes(response.data);
      setTeachingTypeId(response.data[0].id);
    });
  };

  useEffect(() => {
    getTeachingTypes();
  }, []);

  const clearFields = (): void => {
    setName('');
    setEmail('');
    setPassword('');
  };

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
        <SchoolGradeSelect
          userType={userType}
          teachingTypes={teachingTypes}
          teachingTypeSelectedId={teachingTypeId}
          setTeachingTypeSelectedId={setTeachingTypeId}
        />
      </SignFieldsBox>
      <SignActions>
        <SignButton onClick={() => registerUser()}>
          <SignButtonLabel>Cadastrar</SignButtonLabel>
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

export default Register;
