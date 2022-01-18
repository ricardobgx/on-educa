/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouteMatch } from 'react-router-dom';
import { ActionCreators, State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import DuelQuestion from '../../components/DuelQuestions/DuelQuestion';
import DuelStatus from '../../components/DuelQuestions/DuelStatus';
import { DuelQuestionsBox, PageBox } from './styles';
import { IDuel } from '../../interfaces/IDuel';
import {
  DEFAULT_DUEL,
  DEFAULT_DUEL_QUESTION,
  DEFAULT_DUEL_TEAM,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
} from '../../static/defaultEntitiesValues';
import { IDuelRoundQuestion } from '../../interfaces/IDuelRoundQuestion';
import { isDefaultDuel } from '../../functions/entitiesValues';
import { getDuel } from '../../functions/duel';
import OnEducaAPI from '../../services/api';
import { getDuelRoundQuestionsByDuelRound } from '../../functions/duelRoundQuestion';
import { createDuelQuestionAnswer } from '../../functions/duelQuestionAnswer';
import { IDuelQuestionAnswer } from '../../interfaces/IDuelQuestionAnswer';
import { IDuelTeamParticipation } from '../../interfaces/IDuelTeamParticipation';
import { IDuelRound } from '../../interfaces/IDuelRound';
import { findStudentDuelPartByTeams } from '../../functions/duelTeamParts';

interface IDuelQuestionsRouteParams {
  id: string;
}

const questionsTest: IDuelRoundQuestion[] = [];

const duelTest: IDuel = {
  ...DEFAULT_DUEL,
  id: '1',
};

const DuelQuestions = (): JSX.Element => {
  /* Local State */

  const [question, setQuestion] = useState<IDuelRoundQuestion>(
    DEFAULT_DUEL_QUESTION,
  );

  /* Estado da aplicacao */

  const { aplication, duel, user } = useSelector((store: State) => store);
  const { token } = aplication;

  // Dispatch

  const dispatch = useDispatch();

  const { loadDuel, answerDuelRoundQuestion: answerQuestion } =
    bindActionCreators(ActionCreators, dispatch);

  /* Estado da pagina */

  const [questions, setQuestions] = useState<IDuelRoundQuestion[]>([]);
  const [studentParticipation, setStudentParticipation] =
    useState<IDuelTeamParticipation>(DEFAULT_DUEL_TEAM_PARTICIPATION);

  /* Number functions */

  // Random int number from interval

  const randIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /* Questions functions */

  // Sort duel question

  const sortDuelQuestion = (duelQuestions: IDuelRoundQuestion[]): void => {
    const noAnsweredQuestions = duelQuestions.filter((duelQuestion) => {
      const { answer } = duelQuestion;
      return !answer?.selectedAlternative;
    });

    const randQuestionIndex = randIntFromInterval(
      0,
      noAnsweredQuestions.length - 1,
    );

    setQuestion(noAnsweredQuestions[randQuestionIndex]);
  };

  // Number of Answered Questions

  const answeredQuestionsNumber = (
    duelQuestions: IDuelRoundQuestion[],
  ): number => {
    return duelQuestions.filter((duelQuestion) => {
      const { answer } = duelQuestion;
      return !!answer?.selectedAlternative;
    }).length;
  };

  // Definir questao a ser respondida

  const setQuestionNow = (duelRound: IDuelRound): void => {
    const activeQuestion = duelRound.question || DEFAULT_DUEL_QUESTION;
    setQuestion(activeQuestion);
  };

  const setNextQuestion = async (
    duelQuestionAnswer: IDuelQuestionAnswer,
  ): Promise<void> => {
    await getDuelRoundQuestionsByDuelRound(
      OnEducaAPI,
      duel.duelRound.id,
      token,
      setQuestions,
    );
  };

  // Answer Question

  const answerDuelQuestion = async (
    duelTeamParticipationId: string,
    duelRoundQuestionId: string,
    selectedAlternativeId: string,
  ): Promise<void> => {
    await createDuelQuestionAnswer(
      OnEducaAPI,
      {
        duelTeamParticipationId,
        questionId: duelRoundQuestionId,
        selectedAlternativeId,
      },
      token,
      setNextQuestion,
    );

    // answerQuestion(newQuestions);

    // setDuelQuestionsCompleted(true);
  };

  /* Parametros da rota da pagina */

  const route = useRouteMatch();
  const { id: duelId } = route.params as IDuelQuestionsRouteParams;

  /* Funcoes */

  const getDuelRoundQuestions = async (duelFound: IDuel): Promise<void> => {
    loadDuel(duelFound);

    const { duelRound } = duelFound;

    setQuestionNow(duelRound);

    const studentParticipationFound = findStudentDuelPartByTeams(
      duelRound.teams,
      user,
    );

    setStudentParticipation(studentParticipationFound);

    await getDuelRoundQuestionsByDuelRound(
      OnEducaAPI,
      duelRound.id,
      token,
      setQuestions,
    );
  };

  const getDuelData = async (): Promise<void> => {
    await getDuel(OnEducaAPI, duelId, token, getDuelRoundQuestions, () =>
      console.log('erro'),
    );
  };

  /* ComponentMount operations */

  useEffect(() => {
    if (isDefaultDuel(duel)) {
      getDuelData();
    } else {
      getDuelRoundQuestions(duel);
    }
  }, [user]);

  const { duelRound } = duel;
  const activeTeam = duelRound.team || DEFAULT_DUEL_TEAM;
  const activeParticipation =
    activeTeam.participation || DEFAULT_DUEL_TEAM_PARTICIPATION;

  return (
    <Page>
      <PageBox>
        <DuelQuestionsBox>
          <DuelStatus
            duelRound={duelRound}
            answeredQuestionsNumber={answeredQuestionsNumber}
            questions={questions}
          />
          <DuelQuestion
            studentParticipation={studentParticipation}
            activeParticipationId={activeParticipation.id}
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
