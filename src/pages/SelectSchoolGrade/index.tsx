import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ExtraBigMaterialIconOutlined } from '../../components/App/Icons/MaterialIcons/MaterialIconsOutlined';
import SignPageHeader from '../../components/SignPageHeader';
import { isDefaultSchoolGrade } from '../../functions/entitiesValues';
import { getSchoolGradesByTeachingType } from '../../functions/schoolGrade';
import { getTeachingTypes } from '../../functions/teachingType';
import OnEducaAPI from '../../services/api';
import { DEFAULT_SCHOOL_GRADE } from '../../static/defaultEntitiesValues';
import {
  SelectSchoolGradeBox,
  SchoolGrades,
  SchoolGrade,
  SchoolGradeLabel,
  ConfirmSchoolGradeButton,
  ConfirmSchoolGradeButtonLabel,
} from './styles';

const SelectSchoolGrade: React.FC = () => {
  const pageHistory = useHistory();

  const [schoolGrades, setSchoolGrades] = useState<ISchoolGrade[]>([]);
  const [schoolGradeSelected, setSchoolGradeSelected] =
    useState<ISchoolGrade>(DEFAULT_SCHOOL_GRADE);

  const getSchoolGradesAction = async (): Promise<void> => {
    const teachingTypes = await getTeachingTypes(
      OnEducaAPI,
      (tt: ITeachingType[]) => console.log('hi'),
    );

    const highSchoolTeachingType = teachingTypes.find(
      (teachingType) => teachingType.name === 'Ensino Médio',
    );

    if (!highSchoolTeachingType) return;

    const schoolGradesFound = await getSchoolGradesByTeachingType(
      OnEducaAPI,
      highSchoolTeachingType.id,
      (sg: ISchoolGrade[]) => console.log('hi'),
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
            className={`${
              schoolGrade.id === schoolGradeSelected.id ? 'selected' : ''
            }`}
            onClick={() => setSchoolGradeSelected(schoolGrade)}
          >
            <ExtraBigMaterialIconOutlined icon="book" color="#ffffff" />
            <SchoolGradeLabel>{schoolGrade.index}º ano</SchoolGradeLabel>
          </SchoolGrade>
        ))}
      </SchoolGrades>
      <ConfirmSchoolGradeButton
        disabled={isDefaultSchoolGrade(schoolGradeSelected)}
        onClick={() => pageHistory.push('/sign')}
      >
        <ConfirmSchoolGradeButtonLabel>Confirmar</ConfirmSchoolGradeButtonLabel>
      </ConfirmSchoolGradeButton>
    </SelectSchoolGradeBox>
  );
};

export default SelectSchoolGrade;
