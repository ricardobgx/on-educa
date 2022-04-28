import React, { useEffect, useState } from 'react';
import { socket } from '../../../App';
import { deleteDuel as deleteDuelData } from '../../../functions/duel';
import { isDefaultDuel } from '../../../functions/entitiesValues';
import OnEducaAPI from '../../../services/api';
import {
  DuelActionsBarBox,
  OwnerInfo,
  OwnerName,
  Actions,
  SeeDetailsButton,
  SeeDetailsButtonLabel,
  SeeDetailsButtonIcon,
  Participations,
  ParticipationsLabel,
  ParticipationsNumberLabel,
  ParticipationsIcon,
  CloseDuelButton,
  CloseDuelButtonIcon,
  ChatButton,
  ChatButtonLabel,
  ChatButtonIcon,
  CloseDuelButtonLabel,
} from './styles';

interface IDuelActionsBarProps {
  duel: IDuel;
  token: string;
  setShowDuelDetails: (value: boolean) => void;
  setShowChat: (value: boolean) => void;
}

const DuelActionsBar = (props: IDuelActionsBarProps): JSX.Element => {
  const { duel, token, setShowDuelDetails, setShowChat } = props;
  const { student, duelRound } = duel;
  const { people } = student;

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

  const addParticipant = (): void => {
    setNumParticipants(numParticipants + 1);
  };

  const removeParticipant = (): void => {
    setNumParticipants(numParticipants - 1);
  };

  const deleteDuelSucess = (): void => {
    socket.emit(`duel.delete`, {
      duelId: duel.id,
    });
  };

  const deleteDuel = async (): Promise<void> => {
    await deleteDuelData(OnEducaAPI, duel.id, token, deleteDuelSucess, () =>
      console.log('erro'),
    );
  };

  useEffect(() => {
    if (!isDefaultDuel(duel) && numParticipants === -1) {
      setNumParticipants(participantsInDuelCounter(duelRound.teams));
    }

    socket.on(`duel.new-participation:${duel.id}`, addParticipant);
    socket.on(`duel.remove-participation:${duel.id}`, removeParticipant);
    socket.on(`duel.exit-participation:${duel.id}`, removeParticipant);

    return () => {
      socket.off(`duel.new-participation:${duel.id}`, addParticipant);
      socket.off(`duel.remove-participation:${duel.id}`, removeParticipant);
      socket.off(`duel.exit-participation:${duel.id}`, removeParticipant);
    };
  }, [numParticipants, duel]);

  return (
    <DuelActionsBarBox>
      <OwnerInfo>
        <OwnerName>Duelo de {people.name}</OwnerName>
      </OwnerInfo>
      <Actions>
        <SeeDetailsButton
          onClick={() => {
            setShowDuelDetails(true);
          }}
        >
          <SeeDetailsButtonLabel>Detalhes</SeeDetailsButtonLabel>
          <SeeDetailsButtonIcon className="fas fa-info" />
        </SeeDetailsButton>
        <ChatButton onClick={() => setShowChat(true)}>
          <ChatButtonLabel>Chat</ChatButtonLabel>
          <ChatButtonIcon className="fas fa-comment-alt" />
        </ChatButton>
        <Participations>
          <ParticipationsLabel>Participantes</ParticipationsLabel>
          <ParticipationsNumberLabel>
            {numParticipants}/{duelRound.maxGroupParticipants * 2}
          </ParticipationsNumberLabel>
          <ParticipationsIcon className="fas fa-users" />
        </Participations>
        <CloseDuelButton onClick={() => deleteDuel()}>
          <CloseDuelButtonLabel>Excluir</CloseDuelButtonLabel>
          <CloseDuelButtonIcon className="fas fa-trash" />
        </CloseDuelButton>
      </Actions>
    </DuelActionsBarBox>
  );
};

export default DuelActionsBar;
