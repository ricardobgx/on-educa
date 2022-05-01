import React from 'react';
import { SuppliesReferenceBox } from '../styles';
import SuppliesReferenceBoxLabel from '../SuppliesReferenceBoxLabel';
import SuppliesSchoolGradeReferenceSelect from '../SuppliesSchoolGradeReferenceSelect';

interface ISuppliesSchoolGradeReferenceProps {
  label: string;
  teachingType: ITeachingType;
  selectedSchoolGrade: ISchoolGrade;
  setSelectedSchoolGrade: (selectedSchoolGrade: ISchoolGrade) => void;
}

const SuppliesSchoolGradeReference = (
  props: ISuppliesSchoolGradeReferenceProps,
): JSX.Element => {
  /* Props */

  const { label, teachingType, selectedSchoolGrade, setSelectedSchoolGrade } =
    props;

  return (
    <SuppliesReferenceBox>
      <SuppliesReferenceBoxLabel label={label} />
      <SuppliesSchoolGradeReferenceSelect
        teachingType={teachingType}
        selectedSchoolGrade={selectedSchoolGrade}
        setSelectedSchoolGrade={setSelectedSchoolGrade}
      />
    </SuppliesReferenceBox>
  );
};

export default SuppliesSchoolGradeReference;
