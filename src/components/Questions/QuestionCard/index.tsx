import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFullDate, reduceTextSize } from '../../../functions/utils';
import { ActionCreators } from '../../../store';
import QuestionCardActions from '../QuestionCardActions';
import {
  QuestionCardBox,
  QuestionCardDetails,
  QuestionDetails,
  QuestionTitle,
  SubjectLabel,
  QuestionAdditionalDetails,
  UpdateDate,
  UpdateDateLabel,
  UpdateDateIcon,
  QuestionsNumber,
  QuestionsNumberLabel,
  QuestionsNumberIcon,
  ContentLabel,
  UnityLabel,
  QuestionUnity,
} from './styles';

interface IQuestionCardProps {
  subject: ISubject;
  unity: IUnity;
  content: IContent;
  question: IQuestion;
  setQuestion: (value: IQuestion) => void;
  setDeleteQuestionIsVisible: (value: boolean) => void;
}

const QuestionCard = (props: IQuestionCardProps): JSX.Element => {
  const {
    subject,
    unity,
    content,
    question,
    setQuestion,
    setDeleteQuestionIsVisible,
  } = props;
  const { id, description, alternatives, updatedAt } = question;

  const dispatch = useDispatch();

  const { loadQuestion } = bindActionCreators(ActionCreators, dispatch);

  return (
    <QuestionCardBox>
      <QuestionCardDetails
        to={`/questions/${id}`}
        onClick={() => loadQuestion(question)}
      >
        <QuestionDetails>
          <QuestionTitle title={reduceTextSize(description, 150, 100)}>
            {reduceTextSize(description, 35, 20)}
          </QuestionTitle>
          <ContentLabel title={reduceTextSize(content.name, 150, 100)}>
            Conteúdo: {reduceTextSize(content.name, 25, 25)}
          </ContentLabel>
        </QuestionDetails>
        <QuestionUnity>
          <SubjectLabel>Disciplina: {subject.name}</SubjectLabel>
          <UnityLabel>Unidade: {unity.name}</UnityLabel>
        </QuestionUnity>
        <QuestionAdditionalDetails>
          <UpdateDate>
            <UpdateDateLabel>{getFullDate(updatedAt)}</UpdateDateLabel>
            <UpdateDateIcon className="fas fa-clock" />
          </UpdateDate>
          <QuestionsNumber>
            <QuestionsNumberLabel>
              {alternatives.length} alternativa(s)
            </QuestionsNumberLabel>
            <QuestionsNumberIcon className="fas fa-file-alt" />
          </QuestionsNumber>
        </QuestionAdditionalDetails>
      </QuestionCardDetails>
      <QuestionCardActions
        question={question}
        setQuestion={setQuestion}
        setDeleteQuestionIsVisible={setDeleteQuestionIsVisible}
      />
    </QuestionCardBox>
  );
};

export default QuestionCard;
