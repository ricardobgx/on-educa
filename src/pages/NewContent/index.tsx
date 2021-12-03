import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../components';
import {
  PageBox,
  NewContentBox,
  NewContentMainDetails,
  NewContentNameAndReference,
  NewContentName,
  NameLabel,
  NameInput,
  NewContentReference,
  NewContentReferenceBox,
  ReferenceLabel,
  NewContentReferenceSelect,
  NewContentReferenceSelectOption,
  NewContentVideo,
  VideoLabel,
  VideoInput,
  NewContentVideoPreview,
  RequiredField,
  NewContentAdditionalDetails,
  NewContentDescription,
  NewContentDescriptionLabel,
  NewContentAttachments,
  NewContentAttachmentsLabel,
  NewContentAttachmentsList,
  NewContentAttachmentsListBox,
  NewAttachmentButton,
  NewAttachmentButtonLabel,
  NewContentDescriptionInput,
} from './styles';

const referenceOptions = [
  {
    id: '1',
    title: 'Ensino Fundamental',
  },
];

const NewContent = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/subjects" label="Novo conteúdo" />
        <NewContentBox>
          <NewContentMainDetails>
            <NewContentVideo>
              <VideoLabel>
                Link do vídeo<RequiredField>*</RequiredField>
              </VideoLabel>
              <VideoInput type="text" />
              <NewContentVideoPreview />
            </NewContentVideo>
            <NewContentNameAndReference>
              <NewContentName>
                <NameLabel>
                  Nome do conteúdo<RequiredField>*</RequiredField>
                </NameLabel>
                <NameInput type="text" />
              </NewContentName>
              <NewContentReference>
                <NewContentReferenceBox>
                  <ReferenceLabel>Ensino</ReferenceLabel>
                  <NewContentReferenceSelect>
                    {referenceOptions.map((referenceOption) => (
                      <NewContentReferenceSelectOption
                        value={referenceOption.id}
                      >
                        {referenceOption.title}
                      </NewContentReferenceSelectOption>
                    ))}
                  </NewContentReferenceSelect>
                </NewContentReferenceBox>
                <NewContentReferenceBox>
                  <ReferenceLabel>Ensino</ReferenceLabel>
                  <NewContentReferenceSelect>
                    {referenceOptions.map((referenceOption) => (
                      <NewContentReferenceSelectOption
                        value={referenceOption.id}
                      >
                        {referenceOption.title}
                      </NewContentReferenceSelectOption>
                    ))}
                  </NewContentReferenceSelect>
                </NewContentReferenceBox>
                <NewContentReferenceBox>
                  <ReferenceLabel>Ensino</ReferenceLabel>
                  <NewContentReferenceSelect>
                    {referenceOptions.map((referenceOption) => (
                      <NewContentReferenceSelectOption
                        value={referenceOption.id}
                      >
                        {referenceOption.title}
                      </NewContentReferenceSelectOption>
                    ))}
                  </NewContentReferenceSelect>
                </NewContentReferenceBox>
                <NewContentReferenceBox>
                  <ReferenceLabel>Ensino</ReferenceLabel>
                  <NewContentReferenceSelect>
                    {referenceOptions.map((referenceOption) => (
                      <NewContentReferenceSelectOption
                        value={referenceOption.id}
                      >
                        {referenceOption.title}
                      </NewContentReferenceSelectOption>
                    ))}
                  </NewContentReferenceSelect>
                </NewContentReferenceBox>
              </NewContentReference>
            </NewContentNameAndReference>
          </NewContentMainDetails>
          <NewContentAdditionalDetails>
            <NewContentDescription>
              <NewContentDescriptionLabel>
                Descrição<RequiredField>*</RequiredField>
              </NewContentDescriptionLabel>
              <NewContentDescriptionInput />
            </NewContentDescription>
            <NewContentAttachments>
              <NewContentAttachmentsLabel>Anexos</NewContentAttachmentsLabel>
              <NewContentAttachmentsList>
                <NewContentAttachmentsListBox>{}</NewContentAttachmentsListBox>
              </NewContentAttachmentsList>
              <NewAttachmentButton>
                <NewAttachmentButtonLabel>Criar anexo</NewAttachmentButtonLabel>
              </NewAttachmentButton>
            </NewContentAttachments>
          </NewContentAdditionalDetails>
        </NewContentBox>
      </PageBox>
    </Page>
  );
};

export default NewContent;
