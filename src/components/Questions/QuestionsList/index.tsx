/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { ICommonQuestionProps } from '../../../pages/Questions';
import QuestionCard from '../QuestionCard';
import { QuestionsListBox } from './styles';

interface IQuestionsListProps extends ICommonQuestionProps {
  subject: ISubject;
  unity: IUnity;
  content: IContent;
  questions: IQuestion[];
  loadQuestion: (value: IQuestion) => void;
  loadPopup: (popup: IPopup) => void;
}

const QuestionsList = (props: IQuestionsListProps): JSX.Element => {
  const {
    subject,
    unity,
    content,
    questions,
    loadQuestion,
    getQuestions,
    loadPopup,
  } = props;

  return (
    <QuestionsListBox className="supplies-list">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          subject={subject}
          unity={unity}
          content={content}
          question={question}
          getQuestions={getQuestions}
          loadQuestion={loadQuestion}
          loadPopup={loadPopup}
        />
      ))}
    </QuestionsListBox>
  );
};

export default QuestionsList;
