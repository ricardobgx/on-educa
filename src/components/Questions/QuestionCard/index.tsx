import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduceTextSize } from '../../../functions/utils';
import { IContent } from '../../../interfaces/IContent';
import { IQuestion } from '../../../interfaces/IQuestion';
import { ISubject } from '../../../interfaces/ISubject';
import { IUnity } from '../../../interfaces/IUnity';
import { ActionCreators, State } from '../../../store';
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
  const { id, description, alternatives } = question;

  const dispatch = useDispatch();

  const { loadQuestion } = bindActionCreators(ActionCreators, dispatch);

  return (
    <QuestionCardBox>
      <QuestionCardDetails
        to={`/questions/${id}`}
        onClick={() => loadQuestion(question)}
      >
        <QuestionDetails>
          <QuestionTitle title={reduceTextSize(description, 150)}>
            {reduceTextSize(description, 35)}
          </QuestionTitle>
          <ContentLabel title={reduceTextSize(content.title, 150)}>
            Conteúdo: {reduceTextSize(content.title, 25)}
          </ContentLabel>
        </QuestionDetails>
        <QuestionUnity>
          <SubjectLabel>Disciplina: {subject.name}</SubjectLabel>
          <UnityLabel>Unidade: {unity.title}</UnityLabel>
        </QuestionUnity>
        <QuestionAdditionalDetails>
          <UpdateDate>
            <UpdateDateLabel>28/11/2021</UpdateDateLabel>
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
