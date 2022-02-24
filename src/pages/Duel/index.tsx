/* eslint-disable react/jsx-props-no-spreading */

import { AxiosInstance } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { socket } from '../../App';
import SectionLabel from '../../components/App/SectionLabel';
import DuelActions from '../../components/Duel/DuelActions';
import DuelTeams from '../../components/Duel/DuelTeams';
import { getDuel } from '../../functions/duel';
import { findStudentDuelPartByTeams } from '../../functions/duelTeamParts';
import { isDefaultDuel, isDefaultPeople } from '../../functions/entitiesValues';
import { displaySurname, getPeople } from '../../functions/people';
import { Page } from '../../global/styles/components/pageComponents';
import { IDuel } from '../../interfaces/IDuel';
import { IDuelRound } from '../../interfaces/IDuelRound';
import { IDuelTeam } from '../../interfaces/IDuelTeam';
import { IDuelTeamParticipation } from '../../interfaces/IDuelTeamParticipation';
import { IPeople } from '../../interfaces/IPeople';
import { IStudent } from '../../interfaces/IStudent';
import OnEducaAPI from '../../services/api';
import {
  DEFAULT_DUEL,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
} from '../../static/defaultEntitiesValues';
import { ActionCreators, State } from '../../store';
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
  } = useSelector((store: State) => store);
  const { token } = aplication;

  // Funcoes

  const dispatch = useDispatch();
  const { loadDuel } = bindActionCreators(ActionCreators, dispatch);

  /* Estado da pagina */

  const [studentParticipation, setStudentParticipation] =
    useState<IDuelTeamParticipation>(DEFAULT_DUEL_TEAM_PARTICIPATION);
  const [duelOwner, setDuelOwner] = useState(DEFAULT_PEOPLE);

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
      console.log('erro'),
    );
  };

  const startDuel = (): void => {
    loadDuel({
      ...duel,
      duelRound: { ...duel.duelRound, status: DuelRoundStatus.STARTED },
    } as IDuel);
  };

  useEffect(() => {
    if (token) {
      if (isDefaultDuel(duel) && !isDefaultPeople(loggedPeople)) {
        getDuelData();
      } else {
        const { student } = duel;
        getPeople(OnEducaAPI, student.people.id, setDuelOwner, token);
      }
    }

    socket.on(`duel.start:${duelId}`, startDuel);

    return () => {
      socket.off(`duel.start:${duelId}`, startDuel);
    };
  }, [duel, loggedPeople, token]);

  const { student, duelRound } = duel as IDuel;
  const { teams } = duelRound;

  return (
    <Page>
      <PageBox>
        <DuelBox>
          <SectionLabel
            backLink=""
            label={`Duelo de ${displaySurname(duelOwner.name, 20)}`}
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
