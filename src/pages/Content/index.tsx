/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from '../../store';
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
import { IContent } from '../../interfaces/IContent';
import { IUnity } from '../../interfaces/IUnity';
import OnEducaAPI from '../../services/api';
import { getUnits } from '../../functions/unity';
import { getContent } from '../../functions/content';

interface IContentRouteParams {
  id: string;
}

const Content = (): JSX.Element => {
  const route = useRouteMatch();
  const { id: contentId } = route.params as IContentRouteParams;

  /* Local State */

  const [units, setUnits] = useState<IUnity[]>([]);

  /* Global State */

  const dispatch = useDispatch();

  const { loadContent } = bindActionCreators(ActionCreators, dispatch);

  const {
    aplication,
    content,
    schoolGrade,
    subject,
    unity: selectedUnity,
  } = useSelector((store: State) => store);

  const { token } = aplication;

  useEffect(() => {
    getUnits(OnEducaAPI, setUnits, token);
    getContent(OnEducaAPI, contentId, token, loadContent);
  }, [contentId]);

  const { video } = content as IContent;

  const videoLinkSplitWatch = video.split('watch?v=');

  return (
    <Page>
      <PageBox>
        <ContentBox>
          <SectionLabel
            label={`${selectedUnity.title} - ${content.title}`}
            backLink={`/units/${selectedUnity.id}`}
          />
          <ContentInfo>
            <ContentVideoBox>
              <ContentVideo
                src={`https://www.youtube.com/embed/${videoLinkSplitWatch[1]}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </ContentVideoBox>
            <RelatedContentsBox>
              <Contents>
                <SchoolSubjectAndGradeLabel>
                  {subject.name} - {schoolGrade.index}º ano
                </SchoolSubjectAndGradeLabel>
                <ContentsBox>
                  {units.map((unity: IUnity) => (
                    <ContentAccordion key={unity.id} {...unity} />
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
                  <DescriptionText>{content.description}</DescriptionText>
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
