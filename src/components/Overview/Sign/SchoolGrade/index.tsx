import React from 'react';
import { ITeachingType } from '../../../../interfaces/ITeachingType';
import SchoolGradeSelect from '../SchoolGradeSelect';
import { SchoolGradeBox, SchoolGradeLabel } from './styles';

interface ISchoolGradeProps {
  teachingTypes: ITeachingType[];
  schoolGradeSelectedId: string;
  setSchoolGradeSelectedId: (value: string) => void;
}

const SchoolGrade = (props: ISchoolGradeProps): JSX.Element => {
  const { teachingTypes, schoolGradeSelectedId, setSchoolGradeSelectedId } =
    props;

  return (
    <SchoolGradeBox>
      <SchoolGradeLabel>Estudo o:</SchoolGradeLabel>
      <SchoolGradeSelect
        teachingTypes={teachingTypes}
        schoolGradeSelectedId={schoolGradeSelectedId}
        setSchoolGradeSelectedId={setSchoolGradeSelectedId}
      />
    </SchoolGradeBox>
  );
};

export default SchoolGrade;
