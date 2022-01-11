import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getDuel } from '../../../functions/duel';
import { getDuelTeamsByDuelRound } from '../../../functions/duelTeam';
import {
  findStudentDuelTeamPart,
  getDuelTeamPartsByDuelTeam,
  removeParticipant,
} from '../../../functions/duelTeamParts';
import {
  isDefaultDuel,
  isDefaultDuelTeamParticipation,
  isDefaultUser,
} from '../../../functions/entitiesValues';
import { IDuel } from '../../../interfaces/IDuel';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { IUser } from '../../../interfaces/IUser';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_DUEL,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
} from '../../../static/defaultEntitiesValues';
import { ActionCreators, State } from '../../../store';
import SectionLabel from '../../App/SectionLabel';
import ParticipantsList from '../ParticipantsList';
import {
  DashBoardBox,
  DuelActions,
  DuelTeam,
  DuelTeams,
  InviteFriendsButton,
  InviteFriendsButtonLabel,
  Participants,
  ParticipantsBox,
  QuitDuelButton,
  QuitDuelButtonLabel,
  StartDuelButton,
  StartDuelButtonLabel,
  TeamLabel,
} from './styles';

interface IDuelRouteParams {
  id: string;
}

const DashBoard = (): JSX.Element => {
  /* Estado da aplicacao */

  const { aplication, duel, user } = useSelector((store: State) => store);
  const { token } = aplication;

  const dispatch = useDispatch();
  const { loadDuel } = bindActionCreators(ActionCreators, dispatch);

  /* Estado do componente */

  const [duelTeams, setDuelTeams] = useState<IDuelTeam[]>([]);
  const [startedDuel, setStartedDuel] = useState(false);
  const [quitDuel, setQuitDuel] = useState(false);
  const [studentParticipation, setStudentParticipation] =
    useState<IDuelTeamParticipation>(DEFAULT_DUEL_TEAM_PARTICIPATION);

  const isDuelOwner = (loggedUserId: string, duelOwnerId: string): boolean => {
    return loggedUserId === duelOwnerId;
  };

  const startDuel = (): void => {
    setStartedDuel(true);
  };

  const sortTeams = (teams: IDuelTeam[]): IDuelTeam[] => {
    return teams.sort((teamA, teamB) => (teamA.index > teamB.index ? 1 : -1));
  };

  const route = useRouteMatch();
  const { id: duelId } = route.params as IDuelRouteParams;

  // const getDuelTeamsParticipations = (): Promise<void> => {

  // }

  const setUpStudentParticipation = (
    teams: IDuelTeam[],
    student: IUser,
  ): void => {
    let studentParticipationFound: IDuelTeamParticipation =
      DEFAULT_DUEL_TEAM_PARTICIPATION;

    teams.map((team) => {
      if (isDefaultDuelTeamParticipation(studentParticipationFound)) {
        studentParticipationFound = findStudentDuelTeamPart(
          team.participations,
          student,
        );
      }
      return team;
    });

    setStudentParticipation(studentParticipationFound);

    setDuelTeams(teams);
  };

  const getDuelTeams = async (duelFound: IDuel): Promise<void> => {
    loadDuel(duelFound);
    const { duelRound } = duelFound;
    await getDuelTeamsByDuelRound(
      OnEducaAPI,
      duelRound.id,
      token,
      setDuelTeams,
      () => console.log('erro'),
    );
  };

  const getFullDuel = async (): Promise<void> => {
    await getDuel(OnEducaAPI, duelId, token, getDuelTeams, () =>
      console.log('erro'),
    );
  };

  const exitDuel = async (): Promise<void> => {
    await removeParticipant(
      OnEducaAPI,
      studentParticipation.id,
      token,
      () => setQuitDuel(true),
      () => console.log('erro'),
    );
  };

  useEffect((): (() => void) => {
    if (isDefaultDuel(duel)) {
      getFullDuel();
    }
    if (!isDefaultUser(user)) {
      setUpStudentParticipation(duelTeams, user);
    }

    return () => {
      loadDuel(DEFAULT_DUEL);
    };
  }, [user, duelTeams]);

  const { student } = duel as IDuel;
  const teams = sortTeams(duelTeams);

  console.log('render');
  console.log(`Logged User id: ${user.id}`);
  console.log(`Duel owner id: ${student.id}`);

  return (
    <DashBoardBox>
      <SectionLabel backLink="" label={`Duelo de ${student.name}`} />
      <DuelTeams>
        {teams.map((team) => {
          return (
            <DuelTeam key={team.id}>
              <TeamLabel>{team.name}</TeamLabel>
              <Participants>
                <ParticipantsBox>
                  <ParticipantsList
                    team={team}
                    duelOwnerId={student.id}
                    loggedStudent={user}
                    studentParticipation={studentParticipation}
                    setStudentParticipation={setStudentParticipation}
                    refreshDuel={getFullDuel}
                  />
                </ParticipantsBox>
              </Participants>
            </DuelTeam>
          );
        })}
      </DuelTeams>
      <DuelActions>
        <InviteFriendsButton>
          <InviteFriendsButtonLabel>Convidar amigos</InviteFriendsButtonLabel>
        </InviteFriendsButton>
        {!isDuelOwner(user.id, student.id) ? (
          <QuitDuelButton onClick={() => exitDuel()}>
            <QuitDuelButtonLabel>Sair</QuitDuelButtonLabel>
          </QuitDuelButton>
        ) : (
          <StartDuelButton onClick={() => startDuel()}>
            <StartDuelButtonLabel>Começar</StartDuelButtonLabel>
          </StartDuelButton>
        )}
        {quitDuel && <Redirect to="/duels" />}
        {startedDuel && <Redirect to={`/duels/${duel.id}/questions`} />}
      </DuelActions>
    </DashBoardBox>
  );
};

export default DashBoard;
