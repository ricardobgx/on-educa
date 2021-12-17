import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IContent } from '../../../interfaces/IContent';
import { ActionCreators, State } from '../../../store';
import ContentCardActions from '../ContentCardActions';
import {
  ContentCardBox,
  ContentCardDetails,
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

interface IContentCardProps {
  content: IContent;
  setContent: (value: IContent) => void;
  setDeleteContentIsVisible: (value: boolean) => void;
}

const ContentCard = (props: IContentCardProps): JSX.Element => {
  const { content, setContent, setDeleteContentIsVisible } = props;
  const { id, title } = content;

  const dispatch = useDispatch();

  const { loadContent } = bindActionCreators(ActionCreators, dispatch);

  const { schoolGrade, subject, unity } = useSelector((store: State) => store);

  return (
    <ContentCardBox>
      <ContentCardDetails
        to={`/contents/${id}`}
        onClick={() => loadContent(content)}
      >
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
      </ContentCardDetails>
      <ContentCardActions
        content={content}
        setContent={setContent}
        setDeleteContentIsVisible={setDeleteContentIsVisible}
      />
    </ContentCardBox>
  );
};

export default ContentCard;
