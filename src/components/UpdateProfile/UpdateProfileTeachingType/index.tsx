import React, { useEffect, useState } from 'react';
import { getTeachingTypes } from '../../../functions/teachingType';
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

  const getTeachingTypesData = async (): Promise<void> => {
    const teachingTypesFound = await getTeachingTypes(OnEducaAPI);

    setTeachingTypes(teachingTypesFound);
  };

  useEffect(() => {
    getTeachingTypesData();
  }, []);

  return (
    <UpdateProfileSectionBox>
      <UpdateProfileSectionBoxLabel>Ensino</UpdateProfileSectionBoxLabel>
      <UpdateProfileSelect
        className="bd-rd-20"
        value={selectedTeachingTypeId}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedTeachingTypeId(event.target.value)
        }
      >
        {teachingTypes.map((teachingType) => (
          <UpdateProfileOption value={teachingType.id}>
            {teachingType.name}
          </UpdateProfileOption>
        ))}
      </UpdateProfileSelect>
    </UpdateProfileSectionBox>
  );
};

export default UpdateProfileTeachingType;
