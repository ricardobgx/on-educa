import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IQuestion } from '../../../interfaces/IQuestion';
import { ActionCreators, State } from '../../../store';
import QuestionCardActions from '../QuestionCardActions';
import {
  QuestionCardBox,
  QuestionCardDetails,
  QuestionDetails,
  QuestionTitle,
  SubjectLabel,
  QuestionSchoolGrade,
  SchoolGradeLabel,
  TeachingTypeLabel,
  QuestionAdditionalDetails,
  UpdateDate,
  UpdateDateLabel,
  UpdateDateIcon,
  QuestionsNumber,
  QuestionsNumberLabel,
  QuestionsNumberIcon,
} from './styles';

interface IQuestionCardProps {
  question: IQuestion;
  setQuestion: (value: IQuestion) => void;
  setDeleteQuestionIsVisible: (value: boolean) => void;
}

const QuestionCard = (props: IQuestionCardProps): JSX.Element => {
  const { question, setQuestion, setDeleteQuestionIsVisible } = props;
  const { id, description } = question;

  const dispatch = useDispatch();

  const { loadQuestion } = bindActionCreators(ActionCreators, dispatch);

  const { schoolGrade, subject, unity } = useSelector((store: State) => store);

  return (
    <QuestionCardBox>
      <QuestionCardDetails
        to={`/questions/${id}`}
        onClick={() => loadQuestion(question)}
      >
        <QuestionDetails>
          <QuestionTitle>{description}</QuestionTitle>
          <SubjectLabel>Unidade: {unity.title}</SubjectLabel>
        </QuestionDetails>
        <QuestionSchoolGrade>
          <SchoolGradeLabel>Série: {schoolGrade.index}º ano</SchoolGradeLabel>
          <TeachingTypeLabel>Disciplina: {subject.name}</TeachingTypeLabel>
        </QuestionSchoolGrade>
        <QuestionAdditionalDetails>
          <UpdateDate>
            <UpdateDateLabel>28/11/2021</UpdateDateLabel>
            <UpdateDateIcon className="fas fa-clock" />
          </UpdateDate>
          <QuestionsNumber>
            <QuestionsNumberLabel>11 questões</QuestionsNumberLabel>
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
