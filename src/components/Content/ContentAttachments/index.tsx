import React from 'react';
import SuppliesAccordionCheckBox from '../../App/Supplies/SuppliesAccordion/SuppliesAccordionCheckBox';
import SuppliesAccordionToggleCheckBox from '../../App/Supplies/SuppliesAccordion/SuppliesAccordionToggleCheckBox';
import AttachmentCard from '../AttachmentCard';
import {
  ContentAttachmentsBox,
  ContentAttachmentsData,
  ContentAttachmentsDataBox,
} from './styles';

const ContentAttachments = (): JSX.Element => {
  return (
    <ContentAttachmentsBox>
      <ContentAttachmentsData className="with-shadow bd-rd-20">
        <SuppliesAccordionCheckBox id="attachments" />
        <SuppliesAccordionToggleCheckBox label="Anexos" id="attachments" />
        <ContentAttachmentsDataBox>
          <AttachmentCard label="Arquivo 1" link="https://www.google.com" />
          <AttachmentCard label="Arquivo 1" link="https://www.google.com" />
          <AttachmentCard label="Arquivo 1" link="https://www.google.com" />
          <AttachmentCard label="Arquivo 1" link="https://www.google.com" />
          <AttachmentCard label="Arquivo 1" link="https://www.google.com" />
          <AttachmentCard label="Arquivo 1" link="https://www.google.com" />
        </ContentAttachmentsDataBox>
      </ContentAttachmentsData>
    </ContentAttachmentsBox>
  );
};

export default ContentAttachments;
