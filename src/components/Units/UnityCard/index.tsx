import React from 'react';
import { IUnity } from '../../../interfaces/Unity';
import {
  UnityCardBox,
  UnityDetails,
  UnityTitle,
  SubjectLabel,
  UnitySchoolGrade,
  SchoolGradeLabel,
  TeachingTypeLabel,
  UnityAdditionalDetails,
  UpdateDate,
  UpdateDateLabel,
  UpdateDateIcon,
  ContentsNumber,
  ContentsNumberLabel,
  ContentsNumberIcon,
} from './styles';

const UnityCard = (props: IUnity): JSX.Element => {
  const { id, title } = props;

  return (
    <UnityCardBox to={`/units/${id}`}>
      <UnityDetails>
        <UnityTitle>{title}</UnityTitle>
        <SubjectLabel>Disciplina: Língua Portuguesa</SubjectLabel>
      </UnityDetails>
      <UnitySchoolGrade>
        <SchoolGradeLabel>Série: 7º ano</SchoolGradeLabel>
        <TeachingTypeLabel>Nível: Ensino Fundamental</TeachingTypeLabel>
      </UnitySchoolGrade>
      <UnityAdditionalDetails>
        <UpdateDate>
          <UpdateDateLabel>28/11/2021</UpdateDateLabel>
          <UpdateDateIcon className="fas fa-clock" />
        </UpdateDate>
        <ContentsNumber>
          <ContentsNumberLabel>11 conteúdos</ContentsNumberLabel>
          <ContentsNumberIcon className="fas fa-book" />
        </ContentsNumber>
      </UnityAdditionalDetails>
    </UnityCardBox>
  );
};

export default UnityCard;
