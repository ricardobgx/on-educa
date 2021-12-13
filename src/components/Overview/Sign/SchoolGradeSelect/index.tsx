import React from 'react';
import { ITeachingType } from '../../../../interfaces/ITeachingType';
import { SchoolGradeSelectBox, SchoolGradeOption } from './styles';

interface ISchoolGradeSelectProps {
  teachingTypes: ITeachingType[];
  schoolGradeSelectedId: string;
  setSchoolGradeSelectedId: (value: string) => void;
}

const SchoolGradeSelect = (props: ISchoolGradeSelectProps): JSX.Element => {
  const { teachingTypes, schoolGradeSelectedId, setSchoolGradeSelectedId } =
    props;

  return (
    <SchoolGradeSelectBox
      value={schoolGradeSelectedId}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        setSchoolGradeSelectedId(event.target.value);
      }}
    >
      {teachingTypes.map((teachingType) => {
        return teachingType.schoolGrades.map((schoolGrade) => (
          <SchoolGradeOption key={schoolGrade.id} value={schoolGrade.id}>
            {schoolGrade.index}º ano - {teachingType.title}
          </SchoolGradeOption>
        ));
      })}
    </SchoolGradeSelectBox>
  );
};

export default SchoolGradeSelect;
