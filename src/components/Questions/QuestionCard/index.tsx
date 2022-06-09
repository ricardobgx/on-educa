import React from 'react';
import { getFullDate, reduceTextSize } from '../../../functions/utils';
import { ICommonQuestionProps } from '../../../pages/Questions';
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

interface IQuestionCardProps extends ICommonQuestionProps {
  subject: ISubject;
  unity: IUnity;
  content: IContent;
  question: IQuestion;
  loadQuestion: (value: IQuestion) => void;
  loadPopup: (popup: IPopup) => void;
}

const QuestionCard = (props: IQuestionCardProps): JSX.Element => {
  const {
    subject,
    unity,
    content,
    question,
    loadQuestion,
    loadPopup,
    getQuestions,
  } = props;
  const { id, description, alternatives, updatedAt } = question;

  return (
    <QuestionCardBox className="supplies-card">
      <QuestionCardDetails
        to={`/questions/${id}`}
        onClick={() => loadQuestion(question)}
        className="block-shadow-button secondary-action bd-rd-10"
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
        getQuestions={getQuestions}
        loadPopup={loadPopup}
      />
    </QuestionCardBox>
  );
};

export default QuestionCard;
