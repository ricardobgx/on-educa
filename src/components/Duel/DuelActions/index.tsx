import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
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
import { ActionCreators } from '../../../store';
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
    loggedPeople,
    loggedStudent,
    studentParticipation,
  } = props;

  /* Estado da aplicacao */

  const dispatch = useDispatch();
  const { loadDuel } = bindActionCreators(ActionCreators, dispatch);

  /* Estado do componente */

  // Variavel de controle para iniciar o duelo
  const [startedDuel, setStartedDuel] = useState(
    duelRoundIsStarted(duelRoundStatus),
  );

  // Variavel de controle para sair do duelo
  const [quitDuel, setQuitDuel] = useState(false);

  const startDuel = async (): Promise<void> => {
    await startDuelRound(API, duelRoundId, token, () => {
      socket.emit(`duel.start`, {
        duelId,
      });
    });
  };

  const exitDuel = async (): Promise<void> => {
    await removeParticipant(
      API,
      studentParticipation.id,
      token,
      () => {
        socket.emit(`duel.exit-participation`, {
          duelId,
          data: {
            ...studentParticipation,
          } as IDuelTeamParticipation,
        });
        location.push('/duels');
      },
      () => console.log('erro'),
    );
  };

  return (
    <DuelActionsBox>
      <InviteFriendsButton className="block-shadow-button secondary-action bd-rd-5">
        <InviteFriendsButtonLabel>Convidar amigos</InviteFriendsButtonLabel>
      </InviteFriendsButton>
      {!isDuelOwner(loggedStudent.id, duelOwner.id) ? (
        <QuitDuelButton
          onClick={() => exitDuel()}
          className="block-shadow-button danger-action bd-rd-5"
        >
          <QuitDuelButtonLabel>Sair</QuitDuelButtonLabel>
        </QuitDuelButton>
      ) : (
        <StartDuelButton
          onClick={() => startDuel()}
          className="block-shadow-button main-action bd-rd-5"
        >
          <StartDuelButtonLabel>Começar</StartDuelButtonLabel>
        </StartDuelButton>
      )}
      {quitDuel && <Redirect to="/duels" />}
      {duelRoundIsStarted(duelRoundStatus) && (
        <Redirect to={`/duels/${duelId}/questions`} />
      )}
    </DuelActionsBox>
  );
};

export default DuelActions;
