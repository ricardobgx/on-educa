import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IContent } from '../../../interfaces/IContent';
import { ActionCreators, State } from '../../../store';
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

  const dispatch = useDispatch();

  const { loadContent } = bindActionCreators(ActionCreators, dispatch);

  const { schoolGrade, subject, unity } = useSelector((store: State) => store);

  return (
    <ContentCardBox to={`/contents/${id}`} onClick={() => loadContent(props)}>
      <ContentDetails>
        <ContentTitle>{title}</ContentTitle>
        <SubjectLabel>Unidade: {unity.title}</SubjectLabel>
      </ContentDetails>
      <ContentSchoolGrade>
        <SchoolGradeLabel>Série: {schoolGrade.index}º ano</SchoolGradeLabel>
        <TeachingTypeLabel>Disciplina: {subject.name}</TeachingTypeLabel>
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
