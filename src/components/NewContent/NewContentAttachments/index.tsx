import React from 'react';
import { NewContentBoxLabel } from '../../../pages/NewContent/styles';
import {
  NewContentAttachmentsBox,
  NewContentAttachmentsList,
  NewContentAttachmentsListBox,
  NewAttachmentButton,
  NewAttachmentButtonLabel,
} from './styles';

const NewContentAttachments = (): JSX.Element => {
  return (
    <NewContentAttachmentsBox>
      <NewContentBoxLabel>Anexos</NewContentBoxLabel>
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
