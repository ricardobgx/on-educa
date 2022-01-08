import React from 'react';
import {
  SuppliesAccordionIcon,
  SuppliesAccordionLabel,
  SuppliesAccordionToggleCheckBoxLabel,
} from './styles';

interface ISuppliesAccordionToggleCheckBoxProps {
  label: string;
  id: string;
}

const SuppliesAccordionToggleCheckBox = (
  props: ISuppliesAccordionToggleCheckBoxProps,
): JSX.Element => {
  const { label, id } = props;

  return (
    <SuppliesAccordionToggleCheckBoxLabel htmlFor={id}>
      <SuppliesAccordionLabel>{label}</SuppliesAccordionLabel>
      <SuppliesAccordionIcon className="fas fa-chevron-right" />
    </SuppliesAccordionToggleCheckBoxLabel>
  );
};

export default SuppliesAccordionToggleCheckBox;
