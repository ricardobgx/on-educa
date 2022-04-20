import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFullDate, reduceTextSize } from '../../../functions/utils';
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
  index: number;
  content: IContent;
  setContent: (value: IContent) => void;
  setDeleteContentIsVisible: (value: boolean) => void;
}

const ContentCard = (props: IContentCardProps): JSX.Element => {
  const { index, content, setContent, setDeleteContentIsVisible } = props;
  const { id, name, questions, updatedAt } = content;

  const dispatch = useDispatch();

  const { loadContent } = bindActionCreators(ActionCreators, dispatch);

  const { schoolGrade, subject, unity, aplication } = useSelector(
    (store: State) => store,
  );
  const { isStudent } = aplication;

  return (
    <ContentCardBox style={{ animationDelay: `${index * 0.2}s` }}>
      <ContentCardDetails
        to={`/contents/${id}`}
        onClick={() => loadContent(content)}
      >
        <ContentDetails>
          <ContentTitle>{reduceTextSize(name, 40, 50)}</ContentTitle>
          <SubjectLabel>Unidade: {unity.name}</SubjectLabel>
        </ContentDetails>
        <ContentSchoolGrade>
          <SchoolGradeLabel>Série: {schoolGrade.index}º ano</SchoolGradeLabel>
          <TeachingTypeLabel>Disciplina: {subject.name}</TeachingTypeLabel>
        </ContentSchoolGrade>
        <ContentAdditionalDetails>
          <UpdateDate>
            <UpdateDateLabel>{getFullDate(updatedAt)}</UpdateDateLabel>
            <UpdateDateIcon className="fas fa-clock" />
          </UpdateDate>
          <ContentsNumber>
            <ContentsNumberLabel>
              {questions.length} questões
            </ContentsNumberLabel>
            <ContentsNumberIcon className="fas fa-file-alt" />
          </ContentsNumber>
        </ContentAdditionalDetails>
      </ContentCardDetails>
      {!isStudent && (
        <ContentCardActions
          content={content}
          setContent={setContent}
          setDeleteContentIsVisible={setDeleteContentIsVisible}
        />
      )}
    </ContentCardBox>
  );
};

export default ContentCard;
