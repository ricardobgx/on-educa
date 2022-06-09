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
    <NewContentAttachmentsBox className="bd-rd-20 with-shadow">
      <NewContentBoxLabel>Anexos</NewContentBoxLabel>
      <NewContentAttachmentsList>
        <NewContentAttachmentsListBox>{}</NewContentAttachmentsListBox>
      </NewContentAttachmentsList>
      <NewAttachmentButton className="block-shadow-button main-action bd-rd-20">
        <NewAttachmentButtonLabel>Criar anexo</NewAttachmentButtonLabel>
      </NewAttachmentButton>
    </NewContentAttachmentsBox>
  );
};

export default NewContentAttachments;
