import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getDuel } from '../../../functions/duel';
import { isDefaultDuel } from '../../../functions/entitiesValues';
import { IDuel } from '../../../interfaces/IDuel';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import OnEducaAPI from '../../../services/api';
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

  const [startedDuel, setStartedDuel] = useState(false);

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

  useEffect(() => {
    if (isDefaultDuel(duel)) {
      getDuel(OnEducaAPI, duelId, token, loadDuel, () => console.log('erro'));
    }
  }, [duelId]);

  const { duelRound, student } = duel as IDuel;
  const { teams: unsortedTeams } = duelRound;
  const teams = sortTeams(unsortedTeams);

  return (
    <DashBoardBox>
      <SectionLabel backLink="" label="Duelo de Aluno 1" />
      <DuelTeams>
        {teams.map((team) => {
          return (
            <DuelTeam>
              <TeamLabel>{team.name}</TeamLabel>
              <Participants>
                <ParticipantsBox>
                  <ParticipantsList
                    duelTeamId={team.id}
                    duelOwnerId={student.id}
                    token={token}
                    loggedStudent={user}
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
          <QuitDuelButton to="/duels">
            <QuitDuelButtonLabel>Sair</QuitDuelButtonLabel>
          </QuitDuelButton>
        ) : (
          <StartDuelButton onClick={() => startDuel()}>
            <StartDuelButtonLabel>Começar</StartDuelButtonLabel>
          </StartDuelButton>
        )}
        {startedDuel && <Redirect to="/duels/12345/questions" />}
      </DuelActions>
    </DashBoardBox>
  );
};

export default DashBoard;
