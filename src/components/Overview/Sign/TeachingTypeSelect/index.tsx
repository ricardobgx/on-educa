import React from 'react';
import { ITeachingType } from '../../../../interfaces/ITeachingType';
import { TeachingTypeSelectBox, TeachingTypeOption } from './styles';

interface ITeachingTypeSelectProps {
  teachingTypes: ITeachingType[];
  teachingTypeSelectedId: string;
  setTeachingTypeSelectedId: (value: string) => void;
}

const TeachingTypeSelect = (props: ITeachingTypeSelectProps): JSX.Element => {
  const { teachingTypes, teachingTypeSelectedId, setTeachingTypeSelectedId } =
    props;

  return (
    <TeachingTypeSelectBox
      value={teachingTypeSelectedId}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        setTeachingTypeSelectedId(event.target.value);
      }}
    >
      {teachingTypes.map((teachingType) => (
        <TeachingTypeOption key={teachingType.id} value={teachingType.id}>
          {teachingType.title}
        </TeachingTypeOption>
      ))}
    </TeachingTypeSelectBox>
  );
};

export default TeachingTypeSelect;
