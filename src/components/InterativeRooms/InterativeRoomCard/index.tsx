/* eslint-disable */

import React from 'react';
import {
  InterativeRoomCardBox,
  InterativeRoomDetails,
  OwnerInfo,
  OwnerName,
  InterativeRoomCode,
  QuestionsPerContentLabel,
  TimeForQuestionLabel,
  InterativeRoomStatus,
  InterativeRoomStatusLabel,
  InterativeRoomStatusIcon,
  InterativeRoomParticipants,
  InterativeRoomParticipantsLabel,
  InterativeRoomParticipantsIcon,
  InterativeRoomStatusBox,
  InterativeRoomSettings,
} from './styles';

interface IInterativeRoomCardProps {
  index: number;
  participantsNumber: number;
  status: number;
  timeForResponse: number;
  maxGroupParticipants: number;
  code: string;
  peopleName: string;
}

const InterativeRoomCard: React.FC<IInterativeRoomCardProps> = (props) => {
  const {
    index,
    participantsNumber,
    maxGroupParticipants,
    status,
    timeForResponse,
    peopleName,
    code,
  } = props;

  return (
    <InterativeRoomCardBox
      to="/interative-rooms/a5s61a-da5dwd6-xaxawd-axa568"
      className="block-shadow-button secondary-action bd-rd-15"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <InterativeRoomDetails>
        <OwnerInfo>
          <OwnerName>Sala de {peopleName}</OwnerName>
        </OwnerInfo>
        <InterativeRoomCode>Código: {code}</InterativeRoomCode>
      </InterativeRoomDetails>
      <InterativeRoomSettings>
        <QuestionsPerContentLabel>
          Alunos por equipe: {maxGroupParticipants}
        </QuestionsPerContentLabel>
        <TimeForQuestionLabel>
          Tempo para responder: {timeForResponse} minuto(s)
        </TimeForQuestionLabel>
      </InterativeRoomSettings>
      <InterativeRoomStatus>
        <InterativeRoomStatusBox>
          <InterativeRoomStatusLabel>
            {status === 1 ? 'Iniciada' : 'Esperando'}
          </InterativeRoomStatusLabel>
          <InterativeRoomStatusIcon
            className={`fas fa-${status === 1 ? 'play' : 'clock'}`}
          />
        </InterativeRoomStatusBox>
        <InterativeRoomParticipants>
          <InterativeRoomParticipantsLabel>
            {participantsNumber}
          </InterativeRoomParticipantsLabel>
          <InterativeRoomParticipantsIcon className="fas fa-users" />
        </InterativeRoomParticipants>
      </InterativeRoomStatus>
    </InterativeRoomCardBox>
  );
};

export default InterativeRoomCard;
