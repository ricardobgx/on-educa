/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { SuppliesReferenceBox } from '../styles';
import SuppliesReferenceBoxLabel from '../SuppliesReferenceBoxLabel';
import SuppliesSubjectReferenceSelect from '../SuppliesSubjectReferenceSelect';

interface ISuppliesSubjectReferenceProps {
  label: string;
  schoolGrade: ISchoolGrade;
  selectedSubject: ISubject;
  setSelectedSubject: (selectedSubject: ISubject) => void;
}

const SuppliesSubjectReference = (
  props: ISuppliesSubjectReferenceProps,
): JSX.Element => {
  /* Props */

  const { label, schoolGrade, selectedSubject, setSelectedSubject } = props;

  return (
    <SuppliesReferenceBox>
      <SuppliesReferenceBoxLabel label={label} />
      <SuppliesSubjectReferenceSelect
        schoolGrade={schoolGrade}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
      />
    </SuppliesReferenceBox>
  );
};

export default SuppliesSubjectReference;
