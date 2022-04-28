/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { SuppliesReferenceBox } from '../styles';
import SuppliesReferenceBoxLabel from '../SuppliesReferenceBoxLabel';
import SuppliesTeachingTypeReferenceSelect from '../SuppliesTeachingTypeReferenceSelect';

interface ISuppliesTeachingTypeReferenceProps {
  label: string;
  selectedTeachingType: ITeachingType;
  setSelectedTeachingType: (selectedTeachingType: ITeachingType) => void;
}

const SuppliesTeachingTypeReference = (
  props: ISuppliesTeachingTypeReferenceProps,
): JSX.Element => {
  /* Props */

  const { label, selectedTeachingType, setSelectedTeachingType } = props;

  return (
    <SuppliesReferenceBox>
      <SuppliesReferenceBoxLabel label={label} />
      <SuppliesTeachingTypeReferenceSelect
        selectedTeachingType={selectedTeachingType}
        setSelectedTeachingType={setSelectedTeachingType}
      />
    </SuppliesReferenceBox>
  );
};

export default SuppliesTeachingTypeReference;
