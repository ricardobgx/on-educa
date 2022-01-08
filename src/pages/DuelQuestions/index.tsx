/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import DuelQuestion from '../../components/DuelQuestions/DuelQuestion';
import DuelStatus from '../../components/DuelQuestions/DuelStatus';
import { DuelQuestionsBox, PageBox } from './styles';
import { IDuel } from '../../interfaces/IDuel';
import {
  DEFAULT_DUEL,
  DEFAULT_DUEL_QUESTION,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
} from '../../static/defaultEntitiesValues';
import { IDuelQuestion } from '../../interfaces/IDuelQuestion';

const questionsTest: IDuelQuestion[] = [];

const duelTest: IDuel = {
  ...DEFAULT_DUEL,
  id: '1',
  questions: questionsTest,
};

const DuelQuestions = (): JSX.Element => {
  /* Local State */

  const [question, setQuestion] = useState<IDuelQuestion>(
    DEFAULT_DUEL_QUESTION,
  );

  /* Global State */

  // Dispatch

  const duel = useSelector((store: State) => store.duel);

  const dispatch = useDispatch();

  const { loadDuel, answerDuelQuestion: answerQuestion } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Number functions */

  // Random int number from interval

  const randIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /* Questions functions */

  // Sort duel question

  const sortDuelQuestion = (duelQuestions: IDuelQuestion[]): void => {
    const noAnsweredQuestions = duelQuestions.filter((duelQuestion) => {
      const { duelQuestionAnswer } = duelQuestion;
      return !duelQuestionAnswer?.selectedAlternative;
    });

    const randQuestionIndex = randIntFromInterval(
      0,
      noAnsweredQuestions.length - 1,
    );

    setQuestion(noAnsweredQuestions[randQuestionIndex]);
  };

  // Number of Answered Questions

  const answeredQuestionsNumber = (duelQuestions: IDuelQuestion[]): number => {
    return duelQuestions.filter((duelQuestion) => {
      const { duelQuestionAnswer } = duelQuestion;
      return !!duelQuestionAnswer?.selectedAlternative;
    }).length;
  };

  // Answer Question

  const answerDuelQuestion = (
    duelQuestions: IDuelQuestion[],
    answeredDuelQuestionId: string,
    selectedAlternativeId: string,
  ): void => {
    const newDuelQuestions = duelQuestions.map((duelQuestion) => {
      const newDuelQuestion = { ...duelQuestion };

      if (duelQuestion.id === answeredDuelQuestionId) {
        const { question: questionDuelQuestion } = duelQuestion;
        const findAlternative = questionDuelQuestion.alternatives.filter(
          (alternative) => alternative.id === selectedAlternativeId,
        );

        if (findAlternative.length > 0)
          newDuelQuestion.duelQuestionAnswer = {
            id: '',
            question: duelQuestion,
            duelTeamParticipation: DEFAULT_DUEL_TEAM_PARTICIPATION,
            selectedAlternative: findAlternative[0],
          };
      }

      return newDuelQuestion;
    });

    // answerQuestion(newQuestions);

    if (answeredQuestionsNumber(newDuelQuestions) < newDuelQuestions.length)
      sortDuelQuestion(newDuelQuestions);
    else setQuestion(DEFAULT_DUEL_QUESTION);
    // setDuelQuestionsCompleted(true);
  };

  /* ComponentMount operations */

  useEffect(() => {
    loadDuel(duelTest);
    if (questionsTest.length > 0) sortDuelQuestion(questionsTest);
  }, []);

  /* Global State */

  // Questions

  const { questions } = duel;

  return (
    <Page>
      <PageBox>
        <DuelQuestionsBox>
          <DuelStatus
            answeredQuestionsNumber={answeredQuestionsNumber}
            questions={questions}
          />
          <DuelQuestion
            duelQuestions={questions}
            answerQuestion={answerDuelQuestion}
            duelQuestion={question}
          />
        </DuelQuestionsBox>
        {/* {answeredQuestionsNumber(questions) === questions.length && (
          <Redirect to="/duels/12345/congratulations" />
        )} */}
      </PageBox>
    </Page>
  );
};

export default DuelQuestions;
