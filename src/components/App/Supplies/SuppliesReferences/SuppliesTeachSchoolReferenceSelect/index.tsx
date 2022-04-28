/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultSchoolGrade } from '../../../../../functions/entitiesValues';
import { getSchoolGrades } from '../../../../../functions/schoolGrade';
import OnEducaAPI from '../../../../../services/api';
import { DEFAULT_SCHOOL_GRADE } from '../../../../../static/defaultEntitiesValues';
import { RootState } from '../../../../../store';
import {
  SuppliesReferenceSelectOption,
  SuppliesReferenceSelect,
} from '../styles';

interface ISuppliesTeachSchoolReferenceSelectProps {
  selectedSchoolGrade: ISchoolGrade;
  setSelectedSchoolGrade: (schoolGrade: ISchoolGrade) => void;
}

const SuppliesTeachSchoolReferenceSelect = (
  props: ISuppliesTeachSchoolReferenceSelectProps,
): JSX.Element => {
  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  /* LocalRootState */

  const [schoolGrades, setSchoolGrades] = useState<ISchoolGrade[]>([]);

  /* Props */

  const { selectedSchoolGrade, setSelectedSchoolGrade } = props;

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

  useEffect(() => {
    getSchoolGrades(OnEducaAPI, setDefaultSchoolGrade, token);
  }, []);

  return (
    <SuppliesReferenceSelect
      value={selectedSchoolGrade.id}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedSchoolGrade(
          searchSchoolGrade(schoolGrades, event.target.value) ||
            DEFAULT_SCHOOL_GRADE,
        )
      }
    >
      {schoolGrades.map((schoolGrade) => (
        <SuppliesReferenceSelectOption
          key={schoolGrade.id}
          value={schoolGrade.id}
        >
          {schoolGrade.index} º ano - {schoolGrade.teachingType.name}
        </SuppliesReferenceSelectOption>
      ))}
    </SuppliesReferenceSelect>
  );
};

export default SuppliesTeachSchoolReferenceSelect;
