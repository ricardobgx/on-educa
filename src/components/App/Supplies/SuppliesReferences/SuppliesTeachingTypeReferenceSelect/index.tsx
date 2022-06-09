/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { isDefaultTeachingType } from '../../../../../functions/entitiesValues';
import { getTeachingTypes } from '../../../../../functions/teachingType';
import OnEducaAPI from '../../../../../services/api';
import { DEFAULT_TEACHING_TYPE } from '../../../../../static/defaultEntitiesValues';
import {
  SuppliesReferenceSelectOption,
  SuppliesReferenceSelect,
} from '../styles';

interface ISuppliesTeachingTypeReferenceSelectProps {
  selectedTeachingType: ITeachingType;
  setSelectedTeachingType: (selectedTeachingType: ITeachingType) => void;
}

const SuppliesTeachingTypeReferenceSelect = (
  props: ISuppliesTeachingTypeReferenceSelectProps,
): JSX.Element => {
  /* Local State */

  const [teachingTypes, setTeachingTypes] = useState<ITeachingType[]>([]);

  /* Props */

  const { selectedTeachingType, setSelectedTeachingType } = props;

  const searchTeachingType = (
    teachingTypesFound: ITeachingType[],
    id: string,
  ): ITeachingType | undefined => {
    const teachingTypeFound = teachingTypesFound.find(
      (teachingType) => teachingType.id === id,
    );

    return teachingTypeFound;
  };

  const setDefaultTeachingType = (
    teachingTypesFound: ITeachingType[],
  ): void => {
    setTeachingTypes(teachingTypesFound);

    if (teachingTypesFound.length > 0) {
      if (
        isDefaultTeachingType(selectedTeachingType) ||
        !searchTeachingType(teachingTypesFound, selectedTeachingType.id)
      )
        setSelectedTeachingType(teachingTypesFound[0]);
    } else setSelectedTeachingType(DEFAULT_TEACHING_TYPE);
  };

  const getTeachingTypesData = async (): Promise<void> => {
    const teachingTypesFound = await getTeachingTypes(OnEducaAPI);

    setDefaultTeachingType(teachingTypesFound);
  };

  useEffect(() => {
    getTeachingTypesData();
  }, []);

  return (
    <SuppliesReferenceSelect
      value={selectedTeachingType.id}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedTeachingType(
          searchTeachingType(teachingTypes, event.target.value) ||
            DEFAULT_TEACHING_TYPE,
        )
      }
      className="block-shadow-select bd-rd-20"
    >
      {teachingTypes.map((teachingType) => (
        <SuppliesReferenceSelectOption value={teachingType.id}>
          {teachingType.name}
        </SuppliesReferenceSelectOption>
      ))}
    </SuppliesReferenceSelect>
  );
};

export default SuppliesTeachingTypeReferenceSelect;
