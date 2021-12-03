import React from 'react';
import {
  DuelCardBox,
  DuelDetails,
  OwnerInfo,
  OwnerPicture,
  OwnerName,
  DuelCode,
  SubjectsName,
  ContentsName,
  DuelStatus,
  DuelStatusLabel,
  DuelStatusIcon,
  DuelParticipants,
  DuelParticipantsLabel,
  DuelParticipantsIcon,
  DuelStatusBox,
  DuelContents,
} from './styles';

interface IDuelCardProps {
  id: string;
  ownerName: string;
  ownerPicture: string;
  subjects: string[];
  contents: string[];
  status: string;
  participants: number;
  maxParticipants: number;
}

const DuelCard = (props: IDuelCardProps): JSX.Element => {
  const {
    contents,
    id,
    maxParticipants,
    ownerName,
    ownerPicture,
    participants,
    status,
    subjects,
  } = props;

  return (
    <DuelCardBox to={`/duels/${id}`}>
      <DuelDetails>
        <OwnerInfo>
          {/* <OwnerPicture src={ownerPicture} /> */}
          <OwnerName>Duelo de {ownerName}</OwnerName>
        </OwnerInfo>
        <DuelCode>Código: {id}</DuelCode>
      </DuelDetails>
      <DuelContents>
        <SubjectsName>Disciplinas: {subjects.join(', ')}...</SubjectsName>
        <ContentsName>Conteúdos: {contents.join(', ')}...</ContentsName>
      </DuelContents>
      <DuelStatus>
        <DuelStatusBox>
          <DuelStatusLabel>
            {status === 'waiting' ? 'Esperando' : 'Iniciado'}
          </DuelStatusLabel>
          <DuelStatusIcon
            className={`fas fa-${
              status === 'waiting' ? 'exclamation' : 'check'
            }`}
          />
        </DuelStatusBox>
        <DuelParticipants>
          <DuelParticipantsLabel>
            {participants}/{maxParticipants}
          </DuelParticipantsLabel>
          <DuelParticipantsIcon className="fas fa-users" />
        </DuelParticipants>
      </DuelStatus>
    </DuelCardBox>
  );
};

export default DuelCard;
