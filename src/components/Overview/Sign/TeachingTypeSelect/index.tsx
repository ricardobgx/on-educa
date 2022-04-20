import React from 'react';
import { ITeachingType } from '../../../../interfaces/ITeachingType';
import { TeachSchoolOption, TeachSchoolSelect } from '../components';

interface ITeachingTypeSelectProps {
  teachingTypes: ITeachingType[];
  teachingTypeSelectedId: string;
  setTeachingTypeSelectedId: (value: string) => void;
}

const TeachingTypeSelect = (props: ITeachingTypeSelectProps): JSX.Element => {
  const { teachingTypes, teachingTypeSelectedId, setTeachingTypeSelectedId } =
    props;

  return (
    <TeachSchoolSelect
      value={teachingTypeSelectedId}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        setTeachingTypeSelectedId(event.target.value);
      }}
    >
      {teachingTypes.map((teachingType) => (
        <TeachSchoolOption key={teachingType.id} value={teachingType.id}>
          {teachingType.name}
        </TeachSchoolOption>
      ))}
    </TeachSchoolSelect>
  );
};

export default TeachingTypeSelect;
