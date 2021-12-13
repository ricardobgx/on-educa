import React from 'react';
import {
  NewContentAttachmentsBox,
  NewContentAttachmentsLabel,
  NewContentAttachmentsList,
  NewContentAttachmentsListBox,
  NewAttachmentButton,
  NewAttachmentButtonLabel,
} from './styles';

const NewContentAttachments = (): JSX.Element => {
  return (
    <NewContentAttachmentsBox>
      <NewContentAttachmentsLabel>Anexos</NewContentAttachmentsLabel>
      <NewContentAttachmentsList>
        <NewContentAttachmentsListBox>{}</NewContentAttachmentsListBox>
      </NewContentAttachmentsList>
      <NewAttachmentButton>
        <NewAttachmentButtonLabel>Criar anexo</NewAttachmentButtonLabel>
      </NewAttachmentButton>
    </NewContentAttachmentsBox>
  );
};

export default NewContentAttachments;
