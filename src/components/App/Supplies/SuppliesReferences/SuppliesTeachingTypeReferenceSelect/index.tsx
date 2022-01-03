/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { isDefaultTeachingType } from '../../../../../functions/entitiesValues';
import { getTeachingTypes } from '../../../../../functions/teachingType';
import { ITeachingType } from '../../../../../interfaces/ITeachingType';
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

  const [TeachingTypes, setTeachingTypes] = useState<ITeachingType[]>([]);

  /* Props */

  const { selectedTeachingType, setSelectedTeachingType } = props;

  const searchTeachingType = (
    allTeachingTypes: ITeachingType[],
    id: string,
  ): ITeachingType | undefined => {
    const foundTeachingType = allTeachingTypes.find(
      (teachingType) => teachingType.id === id,
    );

    return foundTeachingType;
  };

  const setDefaultTeachingType = (
    foundTeachingTypes: ITeachingType[],
  ): void => {
    setTeachingTypes(foundTeachingTypes);

    if (foundTeachingTypes.length > 0) {
      if (
        isDefaultTeachingType(selectedTeachingType) ||
        !searchTeachingType(foundTeachingTypes, selectedTeachingType.id)
      )
        setSelectedTeachingType(foundTeachingTypes[0]);
    } else setSelectedTeachingType(DEFAULT_TEACHING_TYPE);
  };

  useEffect(() => {
    getTeachingTypes(OnEducaAPI, setDefaultTeachingType);
  }, []);

  return (
    <SuppliesReferenceSelect
      value={selectedTeachingType.id}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedTeachingType(
          searchTeachingType(TeachingTypes, event.target.value) ||
            DEFAULT_TEACHING_TYPE,
        )
      }
    >
      {TeachingTypes.map((TeachingType) => (
        <SuppliesReferenceSelectOption value={TeachingType.id}>
          {TeachingType.title}
        </SuppliesReferenceSelectOption>
      ))}
    </SuppliesReferenceSelect>
  );
};

export default SuppliesTeachingTypeReferenceSelect;
