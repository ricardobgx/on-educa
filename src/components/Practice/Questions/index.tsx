/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IQuestion } from '../../../interfaces/IQuestion';
import { ActionCreators, State } from '../../../store';
import PracticeStatus from '../PracticeStatus';
import Question from '../Question';
import { Container } from './styles';

const questionsTest: IQuestion[] = [];

export interface IAnsweredQuestion {
  status: string;
}

interface IQuestionsProps {
  setPracticeCompleted: (value: boolean) => void;
}

const Questions = (props: IQuestionsProps): JSX.Element => {
  /* Props */

  const { setPracticeCompleted } = props;

  /* Local State */

  const [questionIndex, setQuestionIndex] = useState(0);

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

  /* ComponentMount operations */

  useEffect((): any => {
    // if (practice === DEFAULT_PRACTICE) {
    loadQuestions(questionsTest);
    // }
  }, []);

  /* Global State */

  // Questions

  const { questions } = practice;

  /* Questions functions */

  // Number of Answered Questions

  const answeredQuestionsNumber = (practiceQuestions: IQuestion[]): number => {
    return practiceQuestions.filter((question: IQuestion) => {
      return !!question;
    }).length;
  };

  // Answer Question

  const answerPracticeQuestion = (
    practiceQuestions: IQuestion[],
    practiceQuestionIndex: number,
    selectedAlternative: string,
  ): void => {
    const newQuestions = practiceQuestions.map((question, index) => {
      const newQuestion = { ...question };
      // if (index === practiceQuestionIndex)
      //   newQuestion.selectedAlternativeId = selectedAlternative;
      return newQuestion;
    });

    answerQuestion(newQuestions);

    if (questionIndex < practiceQuestions.length - 1)
      setQuestionIndex(questionIndex + 1);

    if (answeredQuestionsNumber(questions) === questions.length - 1)
      setPracticeCompleted(true);
  };

  return (
    <Container>
      <PracticeStatus
        answeredQuestionsNumber={answeredQuestionsNumber}
        questions={questions}
      />
      <Question
        question={questions[questionIndex]}
        questions={questions}
        questionIndex={questionIndex}
        answerQuestion={answerPracticeQuestion}
      />
    </Container>
  );
};

export default Questions;
