import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../components';
import { ContentBox, ContentInfo, ContentVideo, PageBox } from './styles';

const Content = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <ContentBox>
          <SectionLabel label="Segunda Guerra Mundial" backLink="/study" />
          <ContentInfo>
            <ContentVideo
              src="https://www.youtube.com/embed/jfLHgN_1dLU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <RelatedContentsBox>
              <Contents>
                <SchoolSubjectAndGradeLabel>
                  História - 1º ano
                </SchoolSubjectAndGradeLabel>
              </Contents>
              <PracticeButton>
                <PracticeButtonLabel />
              </PracticeButton>
            </RelatedContentsBox>
          </ContentInfo>
        </ContentBox>
      </PageBox>
    </Page>
  );
};

export default Content;
