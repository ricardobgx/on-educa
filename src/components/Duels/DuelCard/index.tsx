import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDuel } from '../../../functions/duel';
import { IDuel } from '../../../interfaces/IDuel';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_DUEL } from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
import {
  DuelCardBox,
  DuelDetails,
  OwnerInfo,
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
  duelId: string;
}

const DuelCard = (props: IDuelCardProps): JSX.Element => {
  const { duelId } = props;

  /* Estado da aplicacao */

  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  /* Estado do componente */

  const [duel, setDuel] = useState<IDuel>(DEFAULT_DUEL);

  useEffect(() => {
    getDuel(OnEducaAPI, duelId, token, setDuel, () => console.log('erro'));
  }, []);

  const { id, student, duelRound } = duel;
  const { name: ownerName } = student;
  const { maxGroupParticipants, timeForQuestion, questions, teams } = duelRound;
  let numParticipants = 0;
  teams.map((team) => {
    numParticipants += team.participations.length;
    return team;
  });

  const status = 'waiting';

  return (
    <DuelCardBox to={`/duels/${id}`}>
      <DuelDetails>
        <OwnerInfo>
          <OwnerName>Duelo de {ownerName}</OwnerName>
        </OwnerInfo>
        <DuelCode>Código: {id}</DuelCode>
      </DuelDetails>
      <DuelContents>
        <SubjectsName>{questions.length} questões</SubjectsName>
        <ContentsName>
          Tempo para responder questão: {timeForQuestion} minuto(s)
        </ContentsName>
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
            {numParticipants}/{maxGroupParticipants * teams.length}
          </DuelParticipantsLabel>
          <DuelParticipantsIcon className="fas fa-users" />
        </DuelParticipants>
      </DuelStatus>
    </DuelCardBox>
  );
};

export default DuelCard;
