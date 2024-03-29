/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ActionCreators, RootState } from '../../store';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../../global/styles/components/pageComponents';
import {
  ContentBox,
  ContentDescriptionAndAttachments,
  ContentVideoAndRelatedContents,
  PageBox,
} from './styles';
import OnEducaAPI from '../../services/api';
import { getUnitsBySubject } from '../../functions/unity';
import { getContent } from '../../functions/content';
import ContentDoubts from '../../components/Content/ContentDoubts';
import ContentVideo from '../../components/Content/ContentVideo';
import ContentRelatedUnitsActions from '../../components/Content/ContentRelatedUnitsActions';
import ContentDescription from '../../components/Content/ContentDescription';
import ContentAttachments from '../../components/Content/ContentAttachments';
import { reduceTextSize } from '../../functions/utils';

interface IContentRouteParams {
  id: string;
}

const Content = (): JSX.Element => {
  const route = useRouteMatch();
  const { id: contentId } = route.params as IContentRouteParams;

  /* LocalRootState */

  const [units, setUnits] = useState<IUnity[]>([]);

  /* GlobalRootState */

  const dispatch = useDispatch();

  const { loadContent } = bindActionCreators(ActionCreators, dispatch);

  const {
    aplication,
    content,
    schoolGrade,
    subject,
    unity: selectedUnity,
    student,
  } = useSelector((store: RootState) => store);

  const { token, isStudent } = aplication;

  useEffect(() => {
    getUnitsBySubject(OnEducaAPI, subject.id, setUnits, token);
    getContent(OnEducaAPI, contentId, token, loadContent);
  }, [contentId]);

  const { video, name, description } = content as IContent;

  return (
    <Page>
      <PageBox>
        <ContentBox>
          <SectionLabel
            label={reduceTextSize(`${selectedUnity.name} - ${name}`, 80, 23)}
            backLink={`/units/${selectedUnity.id}`}
          />
          <ContentVideoAndRelatedContents>
            <ContentVideo video={video} />
            <ContentRelatedUnitsActions
              isStudent={isStudent}
              subject={subject}
              schoolGrade={schoolGrade}
              units={units}
              contentId={contentId}
            />
          </ContentVideoAndRelatedContents>
          <ContentDescriptionAndAttachments>
            <ContentDescription description={description} />
            <ContentAttachments />
          </ContentDescriptionAndAttachments>
          <SectionLabel label="Dúvidas" backLink="" />
          <ContentDoubts
            contentId={contentId}
            student={student}
            token={token}
          />
        </ContentBox>
      </PageBox>
    </Page>
  );
};

export default Content;
