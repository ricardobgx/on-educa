/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import { AxiosInstance } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { socket } from '../../App';
import DuelActions from '../../components/Duel/DuelActions';
import DuelActionsBar from '../../components/Duel/DuelActionsBar';
import DuelChat from '../../components/Duel/DuelChat';
import DuelDetails from '../../components/Duel/DuelDetails';
import DuelTeams from '../../components/Duel/DuelTeams';
import { getDuel } from '../../functions/duel';
import { findStudentDuelPartByTeams } from '../../functions/duelTeamParts';
import { isDefaultDuel, isDefaultPeople } from '../../functions/entitiesValues';
import { Page } from '../../global/styles/components/pageComponents';
import OnEducaAPI from '../../services/api';
import {
  DEFAULT_DUEL,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
} from '../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../store';
import { DuelRoundStatus } from '../../types/duelRoundStatus';
import { DuelBox, PageBox } from './styles';

interface IDuelRouteParams {
  id: string;
}

export interface IDuelRequestComponentsProps {
  API: AxiosInstance;
  token: string;
  getDuelData: () => void;
}

export interface IDuelStudentInfoComponentsProps {
  duelId: string;
  duelOwner: IStudent;
  loggedPeople: IPeople;
  loggedStudent: IStudent;
  studentParticipation: IDuelTeamParticipation;
  setStudentParticipation: (value: IDuelTeamParticipation) => void;
}

const Duel = (): JSX.Element => {
  /* Estado da aplicacao */

  // Variaveis

  const {
    aplication,
    duel,
    people: loggedPeople,
    student: loggedStudent,
  } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const pageHistory = useHistory();

  // Funcoes

  const dispatch = useDispatch();
  const { loadDuel, showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Estado da pagina */

  const [studentParticipation, setStudentParticipation] =
    useState<IDuelTeamParticipation>(DEFAULT_DUEL_TEAM_PARTICIPATION);

  const [showDuelDetails, setShowDuelDetails] = useState(false);
  const [showChat, setShowChat] = useState(false);

  /* Parametros da rota da pagina */

  const route = useRouteMatch();
  const { id: duelId } = route.params as IDuelRouteParams;

  /* Funcoes da pagina */

  const setUpDuel = (duelResponse: IDuel): void => {
    const { duelRound } = duelResponse;
    const studentParticipationFound = findStudentDuelPartByTeams(
      duelRound.teams,
      loggedStudent,
    );
    setStudentParticipation(studentParticipationFound);
    loadDuel(duelResponse);
  };

  const getDuelData = async (): Promise<void> => {
    await getDuel(OnEducaAPI, duelId, token, setUpDuel, () =>
      showFloatNotification('Ocorreu um erro'),
    );
  };

  const startDuel = (): void => {
    loadDuel({
      ...duel,
      duelRound: { ...duel.duelRound, status: DuelRoundStatus.STARTED },
    } as IDuel);
  };

  const duelDeleted = (): void => {
    loadDuel(DEFAULT_DUEL);
    pageHistory.push('/duels');
  };

  useEffect(() => {
    if (token) {
      if (isDefaultDuel(duel) && !isDefaultPeople(loggedPeople)) {
        getDuelData();
      } else {
        // const { student } = duel;
        // getPeople(OnEducaAPI, student.people.id, setDuelOwner, token);
      }
    }

    socket.on(`duel.start:${duelId}`, startDuel);
    socket.on(`duel.delete:${duelId}`, duelDeleted);

    return () => {
      socket.off(`duel.start:${duelId}`, startDuel);
      socket.off(`duel.delete:${duelId}`, duelDeleted);
    };
  }, [duel, loggedPeople, token]);

  const { student, duelRound } = duel as IDuel;
  const { teams } = duelRound;

  return (
    <Page>
      <PageBox>
        <DuelBox>
          {showDuelDetails && (
            <DuelDetails duel={duel} setShowDuelDetails={setShowDuelDetails} />
          )}
          {showChat && (
            <DuelChat
              duelId={duelId}
              setShowChat={setShowChat}
              loggedPeople={loggedPeople}
            />
          )}
          {/* <SectionLabel
            backLink=""
            label={`Duelo de ${displaySurname(duelOwner.name, 20)}`}
          /> */}
          <DuelActionsBar
            duel={duel}
            token={token}
            setShowDuelDetails={setShowDuelDetails}
            setShowChat={setShowChat}
          />
          <DuelTeams
            duelId={duel.id}
            duelOwner={student}
            teams={teams}
            loggedStudent={loggedStudent}
            studentParticipation={studentParticipation}
            setStudentParticipation={setStudentParticipation}
          />
          <DuelActions
            API={OnEducaAPI}
            token={token}
            getDuelData={getDuelData}
            duelId={duel.id}
            duelRoundId={duelRound.id}
            duelRoundStatus={duelRound.status}
            duelOwner={student}
            loggedPeople={loggedPeople}
            loggedStudent={loggedStudent}
            studentParticipation={studentParticipation}
            setStudentParticipation={setStudentParticipation}
          />
        </DuelBox>
      </PageBox>
    </Page>
  );
};

export default Duel;
