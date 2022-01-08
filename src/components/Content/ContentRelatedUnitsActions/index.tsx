import React from 'react';
import { isStudent } from '../../../functions/user';
import { ISchoolGrade } from '../../../interfaces/ISchoolGrade';
import { ISubject } from '../../../interfaces/ISubject';
import { IUnity } from '../../../interfaces/IUnity';
import ContentPracticeButton from '../ContentPracticeButton';
import ContentRelatedUnitsList from '../ContentRelatedUnitsList';
import {
  ContentRelatedUnitsActionsBox,
  ContentsRelated,
  ContentsRelatedReferenceLabel,
} from './styles';

interface IContentRelatedUnitsActionsProps {
  userType: string;
  subject: ISubject;
  schoolGrade: ISchoolGrade;
  units: IUnity[];
}

const ContentRelatedUnitsActions = (
  props: IContentRelatedUnitsActionsProps,
): JSX.Element => {
  const { userType, subject, schoolGrade, units } = props;

  return (
    <ContentRelatedUnitsActionsBox>
      <ContentsRelated>
        <ContentsRelatedReferenceLabel>
          {subject.name} - {schoolGrade.index}º ano
        </ContentsRelatedReferenceLabel>

        <ContentRelatedUnitsList units={units} />
      </ContentsRelated>

      {isStudent(userType) && <ContentPracticeButton />}
    </ContentRelatedUnitsActionsBox>
  );
};

export default ContentRelatedUnitsActions;
