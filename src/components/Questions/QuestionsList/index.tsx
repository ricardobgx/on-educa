/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IQuestion } from '../../../interfaces/IQuestion';
import { ICommonQuestionProps } from '../../../pages/Questions';
import QuestionCard from '../QuestionCard';
import { QuestionsListBox, QuestionCards } from './styles';

interface IQuestionsListProps extends ICommonQuestionProps {
  questions: IQuestion[];
  setQuestion: (value: IQuestion) => void;
  setDeleteQuestionIsVisible: (value: boolean) => void;
}

const QuestionsList = (props: IQuestionsListProps): JSX.Element => {
  const { questions, setQuestion, setDeleteQuestionIsVisible } = props;

  return (
    <QuestionsListBox>
      <QuestionCards>
        {questions.map((question) => (
          <QuestionCard
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
