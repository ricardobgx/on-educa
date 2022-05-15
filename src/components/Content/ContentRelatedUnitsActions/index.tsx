import React from 'react';
import ContentPracticeButton from '../ContentPracticeButton';
import ContentRelatedUnitsList from '../ContentRelatedUnitsList';
import {
  ContentRelatedUnitsActionsBox,
  ContentsRelated,
  ContentsRelatedReferenceLabel,
} from './styles';

interface IContentRelatedUnitsActionsProps {
  isStudent: boolean;
  subject: ISubject;
  schoolGrade: ISchoolGrade;
  units: IUnity[];
  contentId: string;
}

const ContentRelatedUnitsActions = (
  props: IContentRelatedUnitsActionsProps,
): JSX.Element => {
  const { isStudent, subject, schoolGrade, units, contentId } = props;

  return (
    <ContentRelatedUnitsActionsBox>
      <ContentsRelated>
        <ContentsRelatedReferenceLabel className="with-shadow bd-rd-30">
          {subject.name} - {schoolGrade.index}º ano
        </ContentsRelatedReferenceLabel>

        <ContentRelatedUnitsList units={units} isStudent={isStudent} />
      </ContentsRelated>

      {isStudent && <ContentPracticeButton contentId={contentId} />}
    </ContentRelatedUnitsActionsBox>
  );
};

export default ContentRelatedUnitsActions;
