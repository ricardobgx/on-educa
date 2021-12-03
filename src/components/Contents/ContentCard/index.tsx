import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import {
  ContentCardBox,
  ContentDetails,
  ContentTitle,
  SubjectLabel,
  ContentSchoolGrade,
  SchoolGradeLabel,
  TeachingTypeLabel,
  ContentAdditionalDetails,
  UpdateDate,
  UpdateDateLabel,
  UpdateDateIcon,
  ContentsNumber,
  ContentsNumberLabel,
  ContentsNumberIcon,
} from './styles';

const ContentCard = (props: IContent): JSX.Element => {
  const { id, title } = props;

  return (
    <ContentCardBox to={`/contents/${id}`}>
      <ContentDetails>
        <ContentTitle>{title}</ContentTitle>
        <SubjectLabel>Unidade: Substantivos</SubjectLabel>
      </ContentDetails>
      <ContentSchoolGrade>
        <SchoolGradeLabel>Série: 7º ano</SchoolGradeLabel>
        <TeachingTypeLabel>Disciplina: Língua Portuguesa</TeachingTypeLabel>
      </ContentSchoolGrade>
      <ContentAdditionalDetails>
        <UpdateDate>
          <UpdateDateLabel>28/11/2021</UpdateDateLabel>
          <UpdateDateIcon className="fas fa-clock" />
        </UpdateDate>
        <ContentsNumber>
          <ContentsNumberLabel>11 questões</ContentsNumberLabel>
          <ContentsNumberIcon className="fas fa-file-alt" />
        </ContentsNumber>
      </ContentAdditionalDetails>
    </ContentCardBox>
  );
};

export default ContentCard;
