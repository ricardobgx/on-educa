import React from 'react';
import {
  AccordionHeaderBox,
  AccordionLabel,
  AccordionToggleIcon,
  AccordionToggleLabel,
} from './styles';

interface IAccordionProps {
  label: string;
  id: string;
}

const AccordionHeader = (props: IAccordionProps): JSX.Element => {
  const { id, label } = props;

  return (
    <AccordionHeaderBox>
      <AccordionLabel>{label}</AccordionLabel>
      <AccordionToggleLabel htmlFor={id}>
        <AccordionToggleIcon className="fas fa-chevron-right" />
      </AccordionToggleLabel>
    </AccordionHeaderBox>
  );
};

export default AccordionHeader;
