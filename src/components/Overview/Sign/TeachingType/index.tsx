import React from 'react';
import { ITeachingType } from '../../../../interfaces/ITeachingType';
import TeachingTypeSelect from '../TeachingTypeSelect';
import { TeachingTypeBox, TeachingTypeLabel } from './styles';

interface ITeachingTypeProps {
  teachingTypes: ITeachingType[];
  teachingTypeSelectedId: string;
  setTeachingTypeSelectedId: (value: string) => void;
}

const TeachingType = (props: ITeachingTypeProps): JSX.Element => {
  const { teachingTypes, teachingTypeSelectedId, setTeachingTypeSelectedId } =
    props;

  return (
    <TeachingTypeBox>
      <TeachingTypeLabel>Qual nível você ensina?</TeachingTypeLabel>
      <TeachingTypeSelect
        teachingTypes={teachingTypes}
        teachingTypeSelectedId={teachingTypeSelectedId}
        setTeachingTypeSelectedId={setTeachingTypeSelectedId}
      />
    </TeachingTypeBox>
  );
};

export default TeachingType;
