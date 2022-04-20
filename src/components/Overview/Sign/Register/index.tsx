import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  SignBox,
  SignLabel,
  SignFieldsBox,
  SignActions,
  SignButton,
  ChangeSignPeople,
  SignButtonLabel,
  ChangeSignPeopleLabel,
} from '../components';

import OnEducaAPI from '../../../../services/api';
import SignTextInput from '../SignTextInput';
import { ActionCreators, State } from '../../../../store';
import { invertPeopleType, registerPeople } from '../../../../functions/people';
import TeachingType from '../TeachingType';
import { getTeachingTypes } from '../../../../functions/teachingType';
import { ITeachingType } from '../../../../interfaces/ITeachingType';
import SchoolGrade from '../SchoolGrade';
import { IPeopleParams } from '../../../../dto/IPeopleParams';
import { registerStudent } from '../../../../functions/student';
import { registerTeacher } from '../../../../functions/teacher';
import { IPeople } from '../../../../interfaces/IPeople';

interface IRegisterProps {
  changeSignType: () => void;
}

const Register = (props: IRegisterProps): JSX.Element => {
  const { aplication } = useSelector((store: State) => store);
  const { isStudent } = aplication;

  const dispatch = useDispatch();
  const { enableLoadingAnimation, disableLoadingAnimation, loadIsStudent } =
    bindActionCreators(ActionCreators, dispatch);

  /* Local State */

  // People

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Teacher

  const [teachingTypes, setTeachingTypes] = useState<ITeachingType[]>([]);
  const [teachingTypeId, setTeachingTypeId] = useState('');

  // Student

  const [schoolGradeId, setSchoolGradeId] = useState('');

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

  const registerPeopleSucess = async (
    peopleCreated: IPeople,
  ): Promise<void> => {
    if (isStudent) {
      await registerStudent(
        OnEducaAPI,
        { peopleId: peopleCreated.id, schoolGradeId },
        registerSucess,
        registerError,
      );
    } else {
      await registerTeacher(
        OnEducaAPI,
        { peopleId: peopleCreated.id, teachingTypeId },
        registerSucess,
        registerError,
      );
    }
  };

  const register = async (): Promise<void> => {
    if (!fieldsIsValid()) return;

    const peopleParams = {
      name,
      email,
      password,
      isStudent,
      isOnline: true,
      profilePictureId: '',
      league: 'Mestre',
    } as IPeopleParams;

    enableLoadingAnimation();
    await registerPeople(
      OnEducaAPI,
      { ...peopleParams },
      registerPeopleSucess,
      registerError,
    );
    disableLoadingAnimation();
  };

  const setUpTeachingTypes = (teachingTypesFound: ITeachingType[]): void => {
    setTeachingTypes(teachingTypesFound);
    if (teachingTypesFound[0]) {
      setTeachingTypeId(teachingTypesFound[0].id);
      const { schoolGrades } = teachingTypesFound[0];

      if (schoolGrades[5]) {
        setSchoolGradeId(schoolGrades[0].id || '');
      }
    }
  };

  useEffect(() => {
    getTeachingTypes(OnEducaAPI, setUpTeachingTypes);
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
          icon="fas fa-user"
        />
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
        {isStudent ? (
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
        <ChangeSignPeople
          onClick={() => {
            loadIsStudent(invertPeopleType(isStudent));
            clearFields();
          }}
        >
          <ChangeSignPeopleLabel>
            Sou
            {isStudent ? ' professor' : ' aluno'}
          </ChangeSignPeopleLabel>
        </ChangeSignPeople>
      </SignActions>
    </SignBox>
  );
};

export default Register;
