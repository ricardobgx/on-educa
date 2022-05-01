/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  isDefaultSchoolGrade,
  isDefaultTeachingType,
} from '../../../../../functions/entitiesValues';
import { getSchoolGradesByTeachingType } from '../../../../../functions/schoolGrade';
import OnEducaAPI from '../../../../../services/api';
import { DEFAULT_SCHOOL_GRADE } from '../../../../../static/defaultEntitiesValues';
import { RootState } from '../../../../../store';
import {
  SuppliesReferenceSelectOption,
  SuppliesReferenceSelect,
} from '../styles';

interface ISuppliesSchoolGradeReferenceSelectProps {
  teachingType: ITeachingType;
  selectedSchoolGrade: ISchoolGrade;
  setSelectedSchoolGrade: (selectedSchoolGrade: ISchoolGrade) => void;
}

const SuppliesSchoolGradeReferenceSelect = (
  props: ISuppliesSchoolGradeReferenceSelectProps,
): JSX.Element => {
  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  /* LocalRootState */

  const [schoolGrades, setSchoolGrades] = useState<ISchoolGrade[]>([]);

  /* Props */

  const { teachingType, selectedSchoolGrade, setSelectedSchoolGrade } = props;

  const searchSchoolGrade = (
    allSchoolGrades: ISchoolGrade[],
    id: string,
  ): ISchoolGrade | undefined => {
    const foundSchoolGrade = allSchoolGrades.find(
      (schoolGrade) => schoolGrade.id === id,
    );

    return foundSchoolGrade;
  };

  const setDefaultSchoolGrade = (foundSchoolGrades: ISchoolGrade[]): void => {
    setSchoolGrades(foundSchoolGrades);

    if (foundSchoolGrades.length > 0) {
      if (
        isDefaultSchoolGrade(selectedSchoolGrade) ||
        !searchSchoolGrade(foundSchoolGrades, selectedSchoolGrade.id)
      )
        setSelectedSchoolGrade(foundSchoolGrades[0]);
    } else setSelectedSchoolGrade(DEFAULT_SCHOOL_GRADE);
  };

  const getSchoolGradesByTeachingTypeData = async (): Promise<void> => {
    const schoolGradesFound = await getSchoolGradesByTeachingType(
      OnEducaAPI,
      teachingType.id,
    );

    setDefaultSchoolGrade(schoolGradesFound);
  };

  useEffect(() => {
    if (!isDefaultTeachingType(teachingType))
      getSchoolGradesByTeachingTypeData();
    else {
      setSelectedSchoolGrade(DEFAULT_SCHOOL_GRADE);
      setSchoolGrades([]);
    }
  }, [teachingType]);

  return (
    <SuppliesReferenceSelect
      value={selectedSchoolGrade.id}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedSchoolGrade(
          searchSchoolGrade(schoolGrades, event.target.value) ||
            DEFAULT_SCHOOL_GRADE,
        )
      }
      className="bd-rd-20"
    >
      {schoolGrades.map((schoolGrade) => (
        <SuppliesReferenceSelectOption value={schoolGrade.id}>
          {schoolGrade.index}º ano
        </SuppliesReferenceSelectOption>
      ))}
    </SuppliesReferenceSelect>
  );
};

export default SuppliesSchoolGradeReferenceSelect;
