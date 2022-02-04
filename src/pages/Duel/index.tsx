/* eslint-disable react/jsx-props-no-spreading */

import { AxiosInstance } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import DuelActions from '../../components/Duel/DuelActions';
import DuelTeams from '../../components/Duel/DuelTeams';
import { getDuel } from '../../functions/duel';
import { findStudentDuelPartByTeams } from '../../functions/duelTeamParts';
import { isDefaultPeople } from '../../functions/entitiesValues';
import { displaySurname } from '../../functions/people';
import { Page } from '../../global/styles/components/pageComponents';
import { IDuel } from '../../interfaces/IDuel';
import { IDuelTeamParticipation } from '../../interfaces/IDuelTeamParticipation';
import { IPeople } from '../../interfaces/IPeople';
import OnEducaAPI from '../../services/api';
import { DEFAULT_DUEL_TEAM_PARTICIPATION } from '../../static/defaultEntitiesValues';
import { ActionCreators, State } from '../../store';
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
  duelOwner: IPeople;
  loggedPeople: IPeople;
  studentParticipation: IDuelTeamParticipation;
  setStudentParticipation: (value: IDuelTeamParticipation) => void;
}

const Duel = (): JSX.Element => {
  /* Estado da aplicacao */

  // Variaveis

  const { aplication, duel, people } = useSelector((store: State) => store);
  const { token } = aplication;

  // Funcoes

  const dispatch = useDispatch();
  const { loadDuel } = bindActionCreators(ActionCreators, dispatch);

  /* Estado da pagina */

  const [studentParticipation, setStudentParticipation] =
    useState<IDuelTeamParticipation>(DEFAULT_DUEL_TEAM_PARTICIPATION);

  /* Parametros da rota da pagina */

  const route = useRouteMatch();
  const { id: duelId } = route.params as IDuelRouteParams;

  /* Funcoes da pagina */

  const setUpDuel = (duelResponse: IDuel): void => {
    const { duelRound } = duelResponse;
    const studentParticipationFound = findStudentDuelPartByTeams(
      duelRound.teams,
      people,
    );
    setStudentParticipation(studentParticipationFound);
    loadDuel(duelResponse);
  };

  const getDuelData = async (): Promise<void> => {
    await getDuel(OnEducaAPI, duelId, token, setUpDuel, () =>
      console.log('erro'),
    );
  };

  useEffect(() => {
    if (!isDefaultPeople(people)) {
      getDuelData();
    }
  }, [people]);

  const { student, duelRound } = duel as IDuel;
  const { teams } = duelRound;

  return (
    <Page>
      <PageBox>
        <DuelBox>
          <SectionLabel
            backLink=""
            label={`Duelo de ${displaySurname(student.name, 20)}`}
          />
          <DuelTeams
            API={OnEducaAPI}
            token={token}
            getDuelData={getDuelData}
            duelOwner={student}
            loggedPeople={people}
            teams={teams}
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
            loggedPeople={people}
            studentParticipation={studentParticipation}
            setStudentParticipation={setStudentParticipation}
          />
        </DuelBox>
      </PageBox>
    </Page>
  );
};

export default Duel;
