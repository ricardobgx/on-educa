import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { socket } from '../../../App';
import { isDuelOwner } from '../../../functions/duel';
import {
  duelRoundIsStarted,
  startDuelRound,
} from '../../../functions/duelRound';
import { removeParticipant } from '../../../functions/duelTeamParts';
import {
  IDuelRequestComponentsProps,
  IDuelStudentInfoComponentsProps,
} from '../../../pages/Duel';
import {
  DuelActionsBox,
  InviteFriendsButton,
  InviteFriendsButtonLabel,
  QuitDuelButton,
  QuitDuelButtonLabel,
  StartDuelButton,
  StartDuelButtonLabel,
} from './styles';

interface IDuelActionsProps
  extends IDuelRequestComponentsProps,
    IDuelStudentInfoComponentsProps {
  duelId: string;
  duelRoundId: string;
  duelRoundStatus: number;
  studentParticipation: IDuelTeamParticipation;
}

const DuelActions = (props: IDuelActionsProps): JSX.Element => {
  const location = useHistory();
  /* Propriedades do componente */

  const {
    API,
    token,
    duelId,
    duelRoundId,
    duelRoundStatus,
    duelOwner,
    loggedStudent,
    studentParticipation,
  } = props;

  /* Estado do componente */

  const startDuel = async (): Promise<void> => {
    await startDuelRound(API, duelRoundId, token, () => {
      socket.emit(`duel.start`, {
        duelId,
      });
    });
  };

  const exitDuel = async (): Promise<void> => {
    await removeParticipant(API, studentParticipation.id, token, () => {
      socket.emit(`duel.exit-participation`, {
        duelId,
        data: {
          ...studentParticipation,
        } as IDuelTeamParticipation,
      });
      location.push('/duels');
    });
  };

  return (
    <DuelActionsBox>
      <InviteFriendsButton className="block-shadow-button secondary-action bd-rd-20">
        <InviteFriendsButtonLabel>Convidar amigos</InviteFriendsButtonLabel>
      </InviteFriendsButton>
      {!isDuelOwner(loggedStudent.id, duelOwner.id) ? (
        <QuitDuelButton
          onClick={() => exitDuel()}
          className="block-shadow-button danger-action bd-rd-20"
        >
          <QuitDuelButtonLabel>Sair</QuitDuelButtonLabel>
        </QuitDuelButton>
      ) : (
        <StartDuelButton
          onClick={() => startDuel()}
          className="block-shadow-button main-action bd-rd-20"
        >
          <StartDuelButtonLabel>Começar</StartDuelButtonLabel>
        </StartDuelButton>
      )}
      {duelRoundIsStarted(duelRoundStatus) && (
        <Redirect to={`/duels/${duelId}/questions`} />
      )}
    </DuelActionsBox>
  );
};

export default DuelActions;
