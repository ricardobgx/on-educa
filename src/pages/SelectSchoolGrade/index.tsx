import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ExtraBigMaterialIconOutlined } from '../../components/App/Icons/MaterialIcons/MaterialIconsOutlined';
import SignPageHeader from '../../components/SignPageHeader';
import { isDefaultSchoolGrade } from '../../functions/entitiesValues';
import { registerPeople } from '../../functions/people';
import { getSchoolGradesByTeachingType } from '../../functions/schoolGrade';
import { registerStudent } from '../../functions/student';
import { getTeachingTypes } from '../../functions/teachingType';
import OnEducaAPI from '../../services/api';
import { DEFAULT_SCHOOL_GRADE } from '../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../store';
import {
  SelectSchoolGradeBox,
  SchoolGrades,
  SchoolGrade,
  SchoolGradeLabel,
  ConfirmSchoolGradeButton,
  ConfirmSchoolGradeButtonLabel,
} from './styles';

const SelectSchoolGrade: React.FC = () => {
  const { signUp } = useSelector((store: RootState) => store);
  const { name, email, password, isStudent } = signUp;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const pageHistory = useHistory();

  const [schoolGrades, setSchoolGrades] = useState<ISchoolGrade[]>([]);
  const [schoolGradeSelected, setSchoolGradeSelected] =
    useState<ISchoolGrade>(DEFAULT_SCHOOL_GRADE);

  const getSchoolGradesAction = async (): Promise<void> => {
    const teachingTypes = await getTeachingTypes(OnEducaAPI);

    const highSchoolTeachingType = teachingTypes.find(
      (teachingType) => teachingType.name === 'Ensino Médio',
    );

    if (!highSchoolTeachingType) return;

    const schoolGradesFound = await getSchoolGradesByTeachingType(
      OnEducaAPI,
      highSchoolTeachingType.id,
    );

    setSchoolGrades(
      schoolGradesFound.sort((sgA: ISchoolGrade, sgB: ISchoolGrade) => {
        if (sgA.index > sgB.index) {
          return 1;
        }
        if (sgB.index > sgA.index) {
          return -1;
        }
        return 0;
      }),
    );
  };

  const createStudent = (peopleId: string, schoolGradeId: string): void => {
    registerStudent(
      OnEducaAPI,
      {
        peopleId,
        schoolGradeId,
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

  const createPeople = (): void => {
    registerPeople(
      OnEducaAPI,
      { name, email, password, isStudent, isOnline: true },
      (peopleCreated: IPeople) => {
        createStudent(peopleCreated.id, schoolGradeSelected.id);
      },
      () => showFloatNotification('Não foi possível cadastrar o usuário'),
    );
  };

  useEffect(() => {
    getSchoolGradesAction();
  }, []);

  return (
    <SelectSchoolGradeBox>
      <SignPageHeader
        title="Qual sua série?"
        canBack
        backLink="/select-user-type"
      />
      <SchoolGrades>
        {schoolGrades.map((schoolGrade) => (
          <SchoolGrade
            className={`block-shadow-button secondary-action bd-rd-30 ${
              schoolGrade.id === schoolGradeSelected.id ? 'selected' : ''
            }`}
            onClick={() => setSchoolGradeSelected(schoolGrade)}
          >
            <ExtraBigMaterialIconOutlined icon="book" color="" />
            <SchoolGradeLabel>{schoolGrade.index}º ano</SchoolGradeLabel>
          </SchoolGrade>
        ))}
      </SchoolGrades>
      <ConfirmSchoolGradeButton
        className="block-shadow-button main-action bd-rd-20"
        disabled={isDefaultSchoolGrade(schoolGradeSelected)}
        onClick={() => createPeople()}
      >
        <ConfirmSchoolGradeButtonLabel>Confirmar</ConfirmSchoolGradeButtonLabel>
      </ConfirmSchoolGradeButton>
    </SelectSchoolGradeBox>
  );
};

export default SelectSchoolGrade;
