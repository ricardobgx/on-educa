/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { ICommonQuestionProps } from '../../../pages/Questions';
import QuestionCard from '../QuestionCard';
import { QuestionsListBox, QuestionCards } from './styles';

interface IQuestionsListProps extends ICommonQuestionProps {
  subject: ISubject;
  unity: IUnity;
  content: IContent;
  question: IQuestion;
  questions: IQuestion[];
  setQuestion: (value: IQuestion) => void;
  setDeleteQuestionIsVisible: (value: boolean) => void;
}

const QuestionsList = (props: IQuestionsListProps): JSX.Element => {
  const {
    subject,
    unity,
    content,
    questions,
    setQuestion,
    setDeleteQuestionIsVisible,
  } = props;

  return (
    <QuestionsListBox>
      <QuestionCards>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            subject={subject}
            unity={unity}
            content={content}
            question={question}
            setQuestion={setQuestion}
            setDeleteQuestionIsVisible={setDeleteQuestionIsVisible}
            {...question}
          />
        ))}
      </QuestionCards>
    </QuestionsListBox>
  );
};

export default QuestionsList;
