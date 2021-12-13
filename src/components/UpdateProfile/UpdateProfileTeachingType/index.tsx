import React, { useEffect, useState } from 'react';
import { getTeachingTypes } from '../../../functions/teachingType';
import { ITeachingType } from '../../../interfaces/ITeachingType';
import OnEducaAPI from '../../../services/api';
import {
  UpdateProfileOption,
  UpdateProfileSectionBox,
  UpdateProfileSectionBoxLabel,
  UpdateProfileSelect,
} from '../styles';

interface IUpdateProfileTeachingTypeProps {
  selectedTeachingTypeId: string;
  setSelectedTeachingTypeId: (value: string) => void;
}

const UpdateProfileTeachingType = (
  props: IUpdateProfileTeachingTypeProps,
): JSX.Element => {
  /* Local State */

  const [teachingTypes, setTeachingTypes] = useState<ITeachingType[]>([]);

  /* Props */

  const { selectedTeachingTypeId, setSelectedTeachingTypeId } = props;

  useEffect(() => {
    getTeachingTypes(OnEducaAPI, setTeachingTypes);
  }, []);

  return (
    <UpdateProfileSectionBox>
      <UpdateProfileSectionBoxLabel>Ensino</UpdateProfileSectionBoxLabel>
      <UpdateProfileSelect
        value={selectedTeachingTypeId}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedTeachingTypeId(event.target.value)
        }
      >
        {teachingTypes.map((teachingType) => (
          <UpdateProfileOption value={teachingType.id}>
            {teachingType.title}
          </UpdateProfileOption>
        ))}
      </UpdateProfileSelect>
    </UpdateProfileSectionBox>
  );
};

export default UpdateProfileTeachingType;
