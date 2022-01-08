import React from 'react';
import { SuppliesAccordionCheckBoxInput } from './styles';

const SuppliesAccordionCheckBox = (props: { id: string }): JSX.Element => {
  const { id } = props;

  return <SuppliesAccordionCheckBoxInput id={id} type="checkbox" />;
};

export default SuppliesAccordionCheckBox;
