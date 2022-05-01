/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ActionCreators, RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import DuelQuestion from '../../components/DuelQuestions/DuelQuestion';
import DuelStatus from '../../components/DuelQuestions/DuelStatus';
import { DuelQuestionsBox, PageBox } from './styles';
import {
  DEFAULT_DUEL_QUESTION,
  DEFAULT_DUEL_TEAM,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
} from '../../static/defaultEntitiesValues';
import { isDefaultDuel, isDefaultPeople } from '../../functions/entitiesValues';
import { getDuel } from '../../functions/duel';
import OnEducaAPI from '../../services/api';
import { getDuelRoundQuestionsByDuelRound } from '../../functions/duelRoundQuestion';
import { findStudentDuelPartByTeams } from '../../functions/duelTeamParts';
import { answerDuelRoundQuestion } from '../../functions/duelRound';
import { DuelRoundStatus } from '../../types/duelRoundStatus';
import { socket } from '../../App';
import CircularProgressBar from '../../components/App/CircularProgressBar';

interface IDuelQuestionsRouteParams {
  id: string;
}

const DuelQuestions = (): JSX.Element => {
  const pageHistory = useHistory();

  /* LocalRootState */

  const [question, setQuestion] = useState<IDuelRoundQuestion>(
    DEFAULT_DUEL_QUESTION,
  );

  /* Estado da aplicacao */

  const {
    aplication,
    duel,
    people,
    student: loggedStudent,
  } = useSelector((store: RootState) => store);
  const { token } = aplication;

  // Dispatch

  const dispatch = useDispatch();

  const { loadDuel } = bindActionCreators(ActionCreators, dispatch);

  /* Estado da pagina */

  const [questions, setQuestions] = useState<IDuelRoundQuestion[]>([]);
  const [studentParticipation, setStudentParticipation] =
    useState<IDuelTeamParticipation>(DEFAULT_DUEL_TEAM_PARTICIPATION);

  /* Number functions */

  /* Questions functions */

  // Number of Answered Questions

  const answeredQuestionsNumber = (
    duelQuestions: IDuelRoundQuestion[],
  ): number => {
    return duelQuestions.filter((duelQuestion) => {
      const { answer } = duelQuestion;
      return !!answer;
    }).length;
  };

  /* Parametros da rota da pagina */

  const route = useRouteMatch();
  const { id: duelId } = route.params as IDuelQuestionsRouteParams;

  /* Funcoes */

  const getDuelRoundQuestions = async (duelFound: IDuel): Promise<void> => {
    loadDuel(duelFound);

    const { duelRound } = duelFound;

    const studentParticipationFound = findStudentDuelPartByTeams(
      duelRound.teams,
      loggedStudent,
    );

    setQuestion(duelRound.question || DEFAULT_DUEL_QUESTION);

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

  // Answer Question

  const answerDuelQuestion = async (
    duelTeamParticipationId: string,
    duelRoundQuestionId: string,
    selectedAlternativeId: string,
  ): Promise<void> => {
    const duelRoundId = duel.duelRound.id;

    await answerDuelRoundQuestion(
      OnEducaAPI,
      duelRoundId,
      {
        duelRoundId,
        duelRoundQuestionId,
        duelTeamParticipationId,
        selectedAlternativeId,
      },
      token,
      () => {
        socket.emit('duel.question-answered', {
          duelId,
        });
      },
    );
  };

  /* ComponentMount operations */

  useEffect(() => {
    if (
      (isDefaultDuel(duel) || questions.length === 0) &&
      !isDefaultPeople(people)
    ) {
      getDuelData();
    } else if (duel.duelRound.status === DuelRoundStatus.FINISHED) {
      pageHistory.push(`/duels/${duelId}/congratulations`);
    }

    socket.on(`duel.question-answered:${duelId}`, getDuelData);

    return () => {
      socket.off(`duel.question-answered:${duelId}`, getDuelData);
    };
  }, [people, duel]);

  const { duelRound } = duel;
  const activeTeam = duelRound.team || DEFAULT_DUEL_TEAM;
  const activeParticipation =
    activeTeam.participation || DEFAULT_DUEL_TEAM_PARTICIPATION;

  return (
    <Page>
      <PageBox>
        <CircularProgressBar
          stop={false}
          time={duelRound.timeForQuestion * 60}
        />
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
