import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { isDuelOwner } from '../../../functions/duel';
import {
  duelRoundIsStarted,
  startDuelRound,
  updateDuelRound,
} from '../../../functions/duelRound';
import { removeParticipant } from '../../../functions/duelTeamParts';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
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
  /* Propriedades do componente */

  const {
    API,
    token,
    duelId,
    duelRoundId,
    duelRoundStatus,
    duelOwner,
    loggedPeople,
    loggedStudent,
    studentParticipation,
  } = props;

  /* Estado do componente */

  // Variavel de controle para iniciar o duelo
  const [startedDuel, setStartedDuel] = useState(
    duelRoundIsStarted(duelRoundStatus),
  );

  // Variavel de controle para sair do duelo
  const [quitDuel, setQuitDuel] = useState(false);

  const startDuel = async (): Promise<void> => {
    await startDuelRound(API, duelRoundId, token, () => {
      setStartedDuel(true);
    });
  };

  const exitDuel = async (): Promise<void> => {
    await removeParticipant(
      API,
      studentParticipation.id,
      token,
      () => setQuitDuel(true),
      () => console.log('erro'),
    );
  };

  return (
    <DuelActionsBox>
      <InviteFriendsButton className="with-shadow bd-rd-5">
        <InviteFriendsButtonLabel>Convidar amigos</InviteFriendsButtonLabel>
      </InviteFriendsButton>
      {!isDuelOwner(loggedStudent.id, duelOwner.id) ? (
        <QuitDuelButton
          onClick={() => exitDuel()}
          className="with-shadow bd-rd-5"
        >
          <QuitDuelButtonLabel>Sair</QuitDuelButtonLabel>
        </QuitDuelButton>
      ) : (
        <StartDuelButton
          onClick={() => startDuel()}
          className="with-shadow bd-rd-5"
        >
          <StartDuelButtonLabel>Começar</StartDuelButtonLabel>
        </StartDuelButton>
      )}
      {quitDuel && <Redirect to="/duels" />}
      {startedDuel && <Redirect to={`/duels/${duelId}/questions`} />}
    </DuelActionsBox>
  );
};

export default DuelActions;
