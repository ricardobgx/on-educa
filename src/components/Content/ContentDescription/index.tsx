import React from 'react';
import SuppliesAccordionCheckBox from '../../App/Supplies/SuppliesAccordion/SuppliesAccordionCheckBox';
import SuppliesAccordionToggleCheckBox from '../../App/Supplies/SuppliesAccordion/SuppliesAccordionToggleCheckBox';
import {
  ContentDescriptionBox,
  ContentDescriptionData,
  ContentDescriptionDataBox,
  ContentDescriptionDataText,
} from './styles';

const ContentDescription = (props: { description: string }): JSX.Element => {
  const { description } = props;

  return (
    <ContentDescriptionBox>
      <ContentDescriptionData className="with-shadow bd-rd-30">
        <SuppliesAccordionCheckBox id="description" />
        <SuppliesAccordionToggleCheckBox label="Descrição" id="description" />
        <ContentDescriptionDataBox>
          <ContentDescriptionDataText>{description}</ContentDescriptionDataText>
        </ContentDescriptionDataBox>
      </ContentDescriptionData>
    </ContentDescriptionBox>
  );
};

export default ContentDescription;
