import React from 'react';
import { SuppliesReferenceLabel } from '../styles';

interface ISuppliesReferenceBoxLabelProps {
  label: string;
}

const SuppliesReferenceBoxLabel = (
  props: ISuppliesReferenceBoxLabelProps,
): JSX.Element => {
  const { label } = props;

  return <SuppliesReferenceLabel>{label}</SuppliesReferenceLabel>;
};

export default SuppliesReferenceBoxLabel;
