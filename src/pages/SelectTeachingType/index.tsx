import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SignPageHeader from '../../components/SignPageHeader';
import { registerPeople } from '../../functions/people';
import { registerTeacher } from '../../functions/teacher';
import { getTeachingTypes } from '../../functions/teachingType';
import OnEducaAPI from '../../services/api';
import { ActionCreators, RootState } from '../../store';
import Exams from '../../svgs/Exams';
import PrimarySchool from '../../svgs/PrimarySchool';
import {
  SelectTeachingTypeBox,
  TeachingTypes,
  TeachingType,
  TeachingTypeLabel,
} from './styles';

const SelectTeachingType: React.FC = () => {
  const { theme, signUp } = useSelector((store: RootState) => store);
  const { name, email, password, isStudent } = signUp;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const pageHistory = useHistory();

  const [teachingTypes, setTeachingTypes] = useState<ITeachingType[]>([]);

  const getTeachingTypesAction = async (): Promise<void> => {
    const teachingTypesFound = await getTeachingTypes(OnEducaAPI);

    setTeachingTypes(
      teachingTypesFound.sort((ttA: ITeachingType, ttB: ITeachingType) => {
        if (ttA.name > ttB.name) {
          return 1;
        }
        if (ttB.name > ttA.name) {
          return -1;
        }
        return 0;
      }),
    );
  };

  const createTeacher = (peopleId: string, teachingTypeId: string): void => {
    registerTeacher(
      OnEducaAPI,
      {
        peopleId,
        teachingTypeId,
      },
      () => {
        showFloatNotification('Cadastro realizado com sucesso!');
        pageHistory.push('/sign');
      },
      () =>
        showFloatNotification(
          'Não foi possível cadastrar o usuário, tente novamente',
        ),
    );
  };

  const createPeople = (teachingTypeSelected: ITeachingType): void => {
    registerPeople(
      OnEducaAPI,
      { name, email, password, isStudent, isOnline: true },
      (peopleCreated: IPeople) => {
        createTeacher(peopleCreated.id, teachingTypeSelected.id);
      },
      () => showFloatNotification('Não foi possível cadastrar o usuário'),
    );
  };

  useEffect(() => {
    getTeachingTypesAction();
  }, []);

  return (
    <SelectTeachingTypeBox>
      <SignPageHeader
        title="Qual seu nível de ensino?"
        canBack
        backLink="/select-user-type"
      />
      <TeachingTypes>
        <TeachingType
          onClick={() => {
            createPeople(teachingTypes[0]);
          }}
        >
          <PrimarySchool fill={theme.colors.textColor} />
          <TeachingTypeLabel>Ensino Fundamental</TeachingTypeLabel>
        </TeachingType>
        <TeachingType
          onClick={() => {
            createPeople(teachingTypes[1]);
          }}
        >
          <Exams fill={theme.colors.textColor} />
          <TeachingTypeLabel>Ensino Médio</TeachingTypeLabel>
        </TeachingType>
      </TeachingTypes>
    </SelectTeachingTypeBox>
  );
};

export default SelectTeachingType;
