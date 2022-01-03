/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSubjectsBySchoolGrade } from '../../../../../functions/subject';
import { ISubject } from '../../../../../interfaces/ISubject';
import { ISchoolGrade } from '../../../../../interfaces/ISchoolGrade';
import OnEducaAPI from '../../../../../services/api';
import { State } from '../../../../../store';
import {
  SuppliesReferenceSelectOption,
  SuppliesReferenceSelect,
} from '../styles';
import {
  DEFAULT_SCHOOL_GRADE,
  DEFAULT_SUBJECT,
} from '../../../../../static/defaultEntitiesValues';
import {
  isDefaultSchoolGrade,
  isDefaultSubject,
} from '../../../../../functions/entitiesValues';

interface ISuppliesSubjectReferenceSelectProps {
  schoolGrade: ISchoolGrade;
  selectedSubject: ISubject;
  setSelectedSubject: (selectedSubject: ISubject) => void;
}

const SuppliesSubjectReferenceSelect = (
  props: ISuppliesSubjectReferenceSelectProps,
): JSX.Element => {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  /* Local State */

  const [subjects, setSubjects] = useState<ISubject[]>([]);

  /* Props */

  const { schoolGrade, selectedSubject, setSelectedSubject } = props;

  const searchSubject = (
    schoolGradeSubjects: ISubject[],
    id: string,
  ): ISubject | undefined => {
    const foundSubject = schoolGradeSubjects.find(
      (subject) => subject.id === id,
    );

    return foundSubject;
  };

  const setDefaultSubject = (foundSubjects: ISubject[]): void => {
    setSubjects(foundSubjects);

    if (foundSubjects.length > 0) {
      if (
        isDefaultSubject(selectedSubject) ||
        !searchSubject(foundSubjects, selectedSubject.id)
      )
        setSelectedSubject(foundSubjects[0]);
    } else setSelectedSubject(DEFAULT_SUBJECT);
  };

  useEffect(() => {
    if (!isDefaultSchoolGrade(schoolGrade))
      getSubjectsBySchoolGrade(
        OnEducaAPI,
        schoolGrade.id,
        setDefaultSubject,
        token,
      );
    else {
      setSelectedSubject(DEFAULT_SUBJECT);
      setSubjects([]);
    }
  }, [schoolGrade]);

  return (
    <SuppliesReferenceSelect
      value={selectedSubject.id}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedSubject(
          searchSubject(subjects, event.target.value) || DEFAULT_SUBJECT,
        )
      }
    >
      {subjects.map((subject) => (
        <SuppliesReferenceSelectOption key={subject.id} value={subject.id}>
          {subject.name}
        </SuppliesReferenceSelectOption>
      ))}
    </SuppliesReferenceSelect>
  );
};

export default SuppliesSubjectReferenceSelect;
