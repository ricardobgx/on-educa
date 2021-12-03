/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import AttachmentCard from '../../components/Content/AttachmentCard';
import ContentAccordion from '../../components/Content/ContentAccordion';
import {
  AccordionLabel,
  AccordionToggleCheckBox,
  AccordionToggleIcon,
  AccordionToggleLabel,
} from '../../components/Content/ContentAccordion/styles';
import Doubt from '../../components/Content/Doubt';
import { Page } from '../components';
import {
  Attachments,
  AttachmentsBox,
  ContentAttachmentsBox,
  ContentBox,
  ContentDescription,
  ContentDescriptionBox,
  ContentInfo,
  Contents,
  ContentsBox,
  ContentVideo,
  ContentVideoBox,
  Description,
  DescriptionBox,
  DescriptionText,
  Doubts,
  DoubtsBox,
  PageBox,
  PracticeButton,
  PracticeButtonLabel,
  RelatedContentsBox,
  SchoolSubjectAndGradeLabel,
} from './styles';

export interface IContent {
  title: string;
}

export interface IUnity {
  title: string;
  contents: IContent[];
}

const units: IUnity[] = [
  {
    title: 'História do Brasil',
    contents: [
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
    ],
  },
  {
    title: 'História do Nordeste',
    contents: [
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
    ],
  },
  {
    title: 'História da Paraíba',
    contents: [
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
    ],
  },
  {
    title: 'Conflitos Mundiais',
    contents: [
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
    ],
  },
  {
    title: 'História Contemporânea',
    contents: [
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
      {
        title: 'Descoberta',
      },
    ],
  },
];

const Content = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <ContentBox>
          <SectionLabel label="Segunda Guerra Mundial" backLink="/subjects" />
          <ContentInfo>
            <ContentVideoBox>
              <ContentVideo
                src="https://www.youtube.com/embed/jfLHgN_1dLU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </ContentVideoBox>
            <RelatedContentsBox>
              <Contents>
                <SchoolSubjectAndGradeLabel>
                  História - 1º ano
                </SchoolSubjectAndGradeLabel>
                <ContentsBox>
                  {units.map((unity: IUnity, index) => (
                    <ContentAccordion key={unity.title} {...unity} id={index} />
                  ))}
                </ContentsBox>
              </Contents>
              <PracticeButton to="/contents/12345/practice">
                <PracticeButtonLabel>Praticar</PracticeButtonLabel>
              </PracticeButton>
            </RelatedContentsBox>
          </ContentInfo>
          <ContentDescription>
            <ContentDescriptionBox>
              <Description>
                <AccordionToggleCheckBox id="description" type="checkbox" />
                <AccordionToggleLabel htmlFor="description">
                  <AccordionLabel>Descrição</AccordionLabel>
                  <AccordionToggleIcon className="fas fa-chevron-right" />
                </AccordionToggleLabel>
                <DescriptionBox>
                  <DescriptionText>
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                    ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
                  </DescriptionText>
                </DescriptionBox>
              </Description>
            </ContentDescriptionBox>
            <ContentAttachmentsBox>
              <Attachments>
                <AccordionToggleCheckBox id="attachments" type="checkbox" />
                <AccordionToggleLabel htmlFor="attachments">
                  <AccordionLabel>Anexos</AccordionLabel>
                  <AccordionToggleIcon className="fas fa-chevron-right" />
                </AccordionToggleLabel>
                <AttachmentsBox>
                  <AttachmentCard
                    label="Arquivo 1"
                    link="https://www.google.com"
                  />
                  <AttachmentCard
                    label="Arquivo 1"
                    link="https://www.google.com"
                  />
                  <AttachmentCard
                    label="Arquivo 1"
                    link="https://www.google.com"
                  />
                  <AttachmentCard
                    label="Arquivo 1"
                    link="https://www.google.com"
                  />
                  <AttachmentCard
                    label="Arquivo 1"
                    link="https://www.google.com"
                  />
                  <AttachmentCard
                    label="Arquivo 1"
                    link="https://www.google.com"
                  />
                </AttachmentsBox>
              </Attachments>
            </ContentAttachmentsBox>
          </ContentDescription>
          <SectionLabel label="Dúvidas" backLink="" />
          <Doubts>
            <DoubtsBox>
              <Doubt />
              <Doubt />
              <Doubt />
              <Doubt />
              <Doubt />
            </DoubtsBox>
          </Doubts>
        </ContentBox>
      </PageBox>
    </Page>
  );
};

export default Content;
