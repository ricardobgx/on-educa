/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isDefaultPractice } from '../../../functions/entitiesValues';
import { IAlternative } from '../../../interfaces/IAlternative';
import { IQuestion } from '../../../interfaces/IQuestion';
import { DEFAULT_QUESTION } from '../../../static/defaultEntitiesValues';
import { ActionCreators, State } from '../../../store';
import PracticeQuestion from '../PracticeQuestion';
import PracticeStatus from '../PracticeStatus';
import { Container } from './styles';

export interface IAnsweredQuestion {
  status: string;
}

interface IPracticeQuestionsProps {
  setPracticeCompleted: (value: boolean) => void;
}

const PracticeQuestions = (props: IPracticeQuestionsProps): JSX.Element => {
  /* Props */

  const { setPracticeCompleted } = props;

  /* Local State */

  const [question, setQuestion] = useState<IQuestion>(DEFAULT_QUESTION);

  /* Global State */

  // Dispatch

  const dispatch = useDispatch();

  // Actions

  const {
    loadPracticeQuestions: loadQuestions,
    answerPracticeQuestion: answerQuestion,
  } = bindActionCreators(ActionCreators, dispatch);

  // State

  const practice = useSelector((store: State) => store.practice);

  useEffect((): any => {
    if (isDefaultPractice(practice)) {
      loadQuestions([]);
    }
  }, []);

  const { questions } = practice;

  const answeredQuestionsNumber = (practiceQuestions: IQuestion[]): number => {
    return practiceQuestions.filter((practiceQuestion: IQuestion) => {
      return !!practiceQuestion;
    }).length;
  };

  const answerPracticeQuestion = (
    oldPracticeQuestions: IQuestion[],
    practiceQuestion: IQuestion,
    selectedAlternative: IAlternative,
  ): void => {
    const newPracticeQuestions = oldPracticeQuestions.map(
      (oldPracticeQuestion) => {
        const newQuestion = { ...oldPracticeQuestion };

        return newQuestion;
      },
    );

    answerQuestion(newPracticeQuestions);

    if (answeredQuestionsNumber(questions) === questions.length - 1) {
      setPracticeCompleted(true);
    }
  };

  return (
    <Container>
      <PracticeStatus
        answeredQuestionsNumber={answeredQuestionsNumber}
        questions={questions}
      />
      <PracticeQuestion
        question={question}
        questions={questions}
        answerQuestion={answerPracticeQuestion}
      />
    </Container>
  );
};

export default PracticeQuestions;
