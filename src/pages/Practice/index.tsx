/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PracticeQuestion from '../../components/Practice/PracticeQuestion';
import PracticeStatus from '../../components/Practice/PracticeStatus';
import { getPracticeQuestions } from '../../functions/question';
import { randInt } from '../../functions/utils';
import { Page } from '../../global/styles/components/pageComponents';
import OnEducaAPI from '../../services/api';
import { DEFAULT_PRACTICE_QUESTION } from '../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../store';
import { PageBox, PracticeBox } from './styles';

interface IPracticeRouteParams {
  id: string;
}

const Practice = (): JSX.Element => {
  /* Estado da pagina */

  const [question, setQuestion] = useState<IPracticeQuestion>(
    DEFAULT_PRACTICE_QUESTION,
  );
  const [practiceCompleted, setPracticeCompleted] = useState<boolean>(false);

  /* Estado da aplicacao */

  // Dispatch

  const dispatch = useDispatch();

  // Actions

  const { loadPracticeQuestions: loadQuestions } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  // RootState

  const { aplication, practice } = useSelector((store: RootState) => store);
  const { token } = aplication;

  /* Rota */

  const route = useRouteMatch();
  const { id: contentId } = route.params as IPracticeRouteParams;

  const noAnsweredQuestions = (
    practiceQuestions: IPracticeQuestion[],
  ): IPracticeQuestion[] => {
    return practiceQuestions.filter((practiceQuestion: IPracticeQuestion) => {
      const { selectedAlternative } = practiceQuestion;

      return !selectedAlternative;
    });
  };

  const answeredQuestionsNumber = (
    practiceQuestions: IPracticeQuestion[],
  ): number => {
    return practiceQuestions.filter((practiceQuestion: IPracticeQuestion) => {
      const { selectedAlternative } = practiceQuestion;

      return !!selectedAlternative;
    }).length;
  };

  const setNextQuestion = (practiceQuestions: IPracticeQuestion[]): void => {
    const noAnswerQuestions = noAnsweredQuestions(practiceQuestions);
    const newQuestionIndex = randInt(0, noAnswerQuestions.length - 1);

    setQuestion(noAnswerQuestions[newQuestionIndex]);
  };

  const answerPracticeQuestion = (
    oldPracticeQuestions: IPracticeQuestion[],
    practiceQuestion: IPracticeQuestion,
    selectedAlternative: IAlternative,
  ): void => {
    const newPracticeQuestions = [...oldPracticeQuestions];

    const answeredQuestion = {
      ...practiceQuestion,
      selectedAlternative,
    };

    const answeredQuestionIndex =
      oldPracticeQuestions.indexOf(practiceQuestion);

    newPracticeQuestions[answeredQuestionIndex] = answeredQuestion;

    loadQuestions(newPracticeQuestions);

    if (
      answeredQuestionsNumber(newPracticeQuestions) ===
      newPracticeQuestions.length
    ) {
      setPracticeCompleted(true);
    } else {
      setNextQuestion(newPracticeQuestions);
    }
  };

  const setFirstQuestion = (questionsFound: IQuestion[]): void => {
    // loadQuestions(questionsFound);
    const questionIndex = randInt(0, questionsFound.length - 1);

    if (questionsFound[questionIndex])
      setQuestion(questionsFound[questionIndex]);
  };

  const getPracticeQuestionsData = async (): Promise<void> => {
    const practiceQuestions = await getPracticeQuestions(
      OnEducaAPI,
      contentId,
      () => console.log('hi'),
      token,
    );
    loadQuestions([...practiceQuestions]);

    setFirstQuestion(practiceQuestions);
  };

  useEffect(() => {
    if (token) getPracticeQuestionsData();
  }, [token]);

  const { questions } = practice;

  return (
    <Page>
      <PageBox>
        <PracticeBox>
          <PracticeStatus
            answeredQuestionsNumber={answeredQuestionsNumber}
            questions={questions}
          />
          <PracticeQuestion
            question={question}
            questions={questions}
            answerQuestion={answerPracticeQuestion}
          />
          {practiceCompleted && (
            <Redirect to={`/contents/${contentId}/practice-performance`} />
          )}
        </PracticeBox>
      </PageBox>
    </Page>
  );
};

export default Practice;
