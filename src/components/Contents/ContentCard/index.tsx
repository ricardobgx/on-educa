import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFullDate, reduceTextSize } from '../../../functions/utils';
import { ActionCreators } from '../../../store';
import { RootState } from '../../../store/store';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
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
  ContentsNumber,
  ContentsNumberLabel,
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
    (store: RootState) => store,
  );
  const { isStudent } = aplication;

  return (
    <ContentCardBox
      className="supplies-card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <ContentCardDetails
        className="block-shadow-button secondary-action bd-rd-10"
        to={`/contents/${id}`}
        onClick={() => loadContent(content)}
      >
        <ContentDetails>
          <ContentTitle>{reduceTextSize(name, 40, 35)}</ContentTitle>
          <SubjectLabel>Unidade: {unity.name}</SubjectLabel>
        </ContentDetails>
        <ContentSchoolGrade>
          <SchoolGradeLabel>Série: {schoolGrade.index}º ano</SchoolGradeLabel>
          <TeachingTypeLabel>Disciplina: {subject.name}</TeachingTypeLabel>
        </ContentSchoolGrade>
        <ContentAdditionalDetails>
          <UpdateDate>
            <UpdateDateLabel>{getFullDate(updatedAt)}</UpdateDateLabel>
            <SmallMaterialIconOutlined color="" icon="update" />
          </UpdateDate>
          <ContentsNumber>
            <ContentsNumberLabel>
              {questions.length} questões
            </ContentsNumberLabel>
            <SmallMaterialIconOutlined color="" icon="description" />
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
