/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { ISchoolGrade } from '../../../../../interfaces/ISchoolGrade';
import { SuppliesReferenceBox } from '../styles';
import SuppliesReferenceBoxLabel from '../SuppliesReferenceBoxLabel';
import SuppliesTeachSchoolReferenceSelect from '../SuppliesTeachSchoolReferenceSelect';

interface ISuppliesTeachSchoolReferenceProps {
  label: string;
  selectedSchoolGrade: ISchoolGrade;
  setSelectedSchoolGrade: (schoolGrade: ISchoolGrade) => void;
}

const SuppliesTeachSchoolReference = (
  props: ISuppliesTeachSchoolReferenceProps,
): JSX.Element => {
  /* Props */

  const { label, selectedSchoolGrade, setSelectedSchoolGrade } = props;

  return (
    <SuppliesReferenceBox>
      <SuppliesReferenceBoxLabel label={label} />
      <SuppliesTeachSchoolReferenceSelect
        selectedSchoolGrade={selectedSchoolGrade}
        setSelectedSchoolGrade={setSelectedSchoolGrade}
      />
    </SuppliesReferenceBox>
  );
};

export default SuppliesTeachSchoolReference;
