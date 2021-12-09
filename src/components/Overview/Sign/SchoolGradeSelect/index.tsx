import React from 'react';
import { ISchoolGrade } from '../../../../interfaces/ISchoolGrade';
import { ITeachingType } from '../../../../interfaces/ITeachingType';
import {
  SchoolGradeSelectBox,
  TeachingType,
  TeachingTypeLabel,
  TeachingTypeSelect,
  TeachingTypeOption,
} from './styles';

interface ISchoolGradeSelectProps {
  userType: string;
  teachingTypes: ITeachingType[];
  teachingTypeSelectedId: string;
  setTeachingTypeSelectedId: (value: string) => void;
}

const SchoolGradeSelect = (props: ISchoolGradeSelectProps): JSX.Element => {
  const {
    userType,
    teachingTypes,
    teachingTypeSelectedId,
    setTeachingTypeSelectedId,
  } = props;

  return (
    <SchoolGradeSelectBox>
      <TeachingType>
        <TeachingTypeLabel>
          Qual nível você {userType === 'student' ? 'estuda' : 'ensina'}?
        </TeachingTypeLabel>
        <TeachingTypeSelect
          value={teachingTypeSelectedId}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setTeachingTypeSelectedId(event.target.value);
          }}
        >
          {teachingTypes.map((teachingType) => (
            <TeachingTypeOption value={teachingType.id}>
              {teachingType.title}
            </TeachingTypeOption>
          ))}
        </TeachingTypeSelect>
      </TeachingType>
    </SchoolGradeSelectBox>
  );
};

export default SchoolGradeSelect;
