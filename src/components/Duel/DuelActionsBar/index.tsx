/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { socket } from '../../../App';
import {
  deleteDuel as deleteDuelData,
  isDuelOwner,
} from '../../../functions/duel';
import {
  duelRoundIsStarted,
  startDuelRound,
} from '../../../functions/duelRound';
import { removeParticipant } from '../../../functions/duelTeamParts';
import { isDefaultDuel } from '../../../functions/entitiesValues';
import OnEducaAPI from '../../../services/api';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  DuelActionsBarBox,
  OwnerInfo,
  OwnerName,
  Actions,
  DuelActionsBarButton,
  DuelActionsBarButtonLabel,
} from './styles';

interface IDuelActionsBarProps {
  duel: IDuel;
  token: string;
  studentParticipation: IDuelTeamParticipation;
  setShowDuelDetails: (value: boolean) => void;
  setShowChat: (value: boolean) => void;
}

const DuelActionsBar = (props: IDuelActionsBarProps): JSX.Element => {
  const { duel, token, setShowDuelDetails, setShowChat, studentParticipation } =
    props;
  const { student, duelRound } = duel;
  const { people } = student;

  const location = useHistory();

  const participantsInDuelCounter = (teams: IDuelTeam[]): number => {
    let numParticipantsCounter = 0;

    teams.map((team) => {
      team.participations.map((participation) => {
        if (participation.student) {
          numParticipantsCounter += 1;
        }
        return participation;
      });
      return team;
    });

    return numParticipantsCounter;
  };

  const [numParticipants, setNumParticipants] = useState(-1);

  const addParticipantNumber = (): void => {
    setNumParticipants(numParticipants + 1);
  };

  const removeParticipantNumber = (): void => {
    setNumParticipants(numParticipants - 1);
  };

  const deleteDuelSucess = (): void => {
    socket.emit(`duel.delete`, {
      duelId: duel.id,
    });
  };

  const deleteDuel = async (): Promise<void> => {
    await deleteDuelData(OnEducaAPI, duel.id, token, deleteDuelSucess);
  };

  const startDuel = async (): Promise<void> => {
    await startDuelRound(OnEducaAPI, duelRound.id, token, () => {
      socket.emit(`duel.start`, {
        duelId: duel.id,
      });
    });
  };

  const exitDuel = async (): Promise<void> => {
    await removeParticipant(OnEducaAPI, studentParticipation.id, token, () => {
      socket.emit(`duel.exit-participation`, {
        duelId: duel.id,
        data: {
          ...studentParticipation,
        } as IDuelTeamParticipation,
      });
      location.push('/duels');
    });
  };

  useEffect(() => {
    if (!isDefaultDuel(duel) && numParticipants === -1) {
      setNumParticipants(participantsInDuelCounter(duelRound.teams));
    }

    socket.on(`duel.new-participation:${duel.id}`, addParticipantNumber);
    socket.on(`duel.remove-participation:${duel.id}`, removeParticipantNumber);
    socket.on(`duel.exit-participation:${duel.id}`, removeParticipantNumber);

    return () => {
      socket.off(`duel.new-participation:${duel.id}`, addParticipantNumber);
      socket.off(
        `duel.remove-participation:${duel.id}`,
        removeParticipantNumber,
      );
      socket.off(`duel.exit-participation:${duel.id}`, removeParticipantNumber);
    };
  }, [numParticipants, duel]);

  return (
    <DuelActionsBarBox>
      <OwnerInfo className="with-shadow bd-rd-30">
        <OwnerName>Duelo de {people.name}</OwnerName>
      </OwnerInfo>
      <Actions>
        {studentParticipation.student &&
          isDuelOwner(studentParticipation.student.id, student.id) && (
            <DuelActionsBarButton
              className="block-shadow-button main-action bd-rd-30"
              onClick={() => {
                startDuel();
              }}
            >
              <SmallMaterialIconOutlined color="" icon="play_arrow" />
              <DuelActionsBarButtonLabel>Começar</DuelActionsBarButtonLabel>
            </DuelActionsBarButton>
          )}
        <DuelActionsBarButton
          className="block-shadow-button secondary-action bd-rd-30"
          onClick={() => {
            setShowDuelDetails(true);
          }}
        >
          <SmallMaterialIconOutlined color="" icon="info" />
          <DuelActionsBarButtonLabel>Detalhes</DuelActionsBarButtonLabel>
        </DuelActionsBarButton>
        <DuelActionsBarButton
          className="block-shadow-button secondary-action bd-rd-30"
          onClick={() => setShowChat(true)}
        >
          <SmallMaterialIconOutlined color="" icon="forum" />
          <DuelActionsBarButtonLabel>Chat</DuelActionsBarButtonLabel>
        </DuelActionsBarButton>
        <DuelActionsBarButton
          className="block-shadow-button secondary-action bd-rd-30"
          onClick={() => setShowChat(true)}
        >
          <SmallMaterialIconOutlined color="" icon="person_add" />
          <DuelActionsBarButtonLabel>Convidar</DuelActionsBarButtonLabel>
        </DuelActionsBarButton>
        {studentParticipation.student &&
        isDuelOwner(studentParticipation.student.id, student.id) ? (
          <DuelActionsBarButton
            className="block-shadow-button main-action bd-rd-30"
            onClick={() => deleteDuel()}
          >
            <SmallMaterialIconOutlined color="" icon="delete" />
            <DuelActionsBarButtonLabel>Excluir</DuelActionsBarButtonLabel>
          </DuelActionsBarButton>
        ) : (
          <DuelActionsBarButton
            className="block-shadow-button main-action bd-rd-30"
            onClick={() => exitDuel()}
          >
            <SmallMaterialIconOutlined color="" icon="logout" />
            <DuelActionsBarButtonLabel>Sair</DuelActionsBarButtonLabel>
          </DuelActionsBarButton>
        )}
      </Actions>
      {duelRoundIsStarted(duelRound.status) && (
        <Redirect to={`/duels/${duel.id}/questions`} />
      )}
    </DuelActionsBarBox>
  );
};

export default DuelActionsBar;
