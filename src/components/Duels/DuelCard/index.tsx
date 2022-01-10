import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getDuel } from '../../../functions/duel';
import { getDuelTeamsByDuelRound } from '../../../functions/duelTeam';
import { participateInDuel } from '../../../functions/duelTeamParts';
import { IDuel } from '../../../interfaces/IDuel';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import { IUser } from '../../../interfaces/IUser';
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
  student: IUser;
}

const DuelCard = (props: IDuelCardProps): JSX.Element => {
  const { duelId, student: loggedStudent } = props;

  /* Estado da aplicacao */

  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  /* Estado do componente */

  const [duel, setDuel] = useState<IDuel>(DEFAULT_DUEL);
  const [duelTeams, setDuelTeams] = useState<IDuelTeam[]>([]);
  const [numParticipants, setNumParticipants] = useState(0);
  const [participateInDuelComplete, setParticipateInDuelComplete] =
    useState<boolean>(false);

  const participatesInDuelCounter = (teams: IDuelTeam[]): number => {
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

  const setTeams = (teams: IDuelTeam[]): void => {
    setDuelTeams(teams);
    setNumParticipants(participatesInDuelCounter(teams));
  };

  const getDuelData = async (duelFound: IDuel): Promise<void> => {
    setDuel(duelFound);
    await getDuelTeamsByDuelRound(
      OnEducaAPI,
      duelFound.duelRound.id,
      token,
      setTeams,
      () => console.log('erro'),
    );
  };

  const appendParticipant = async (): Promise<void> => {
    await participateInDuel(
      OnEducaAPI,
      {
        duelId,
        studentId: loggedStudent.id,
      },
      token,
      () => setParticipateInDuelComplete(true),
      () => console.log('erro'),
    );
  };

  useEffect(() => {
    getDuel(OnEducaAPI, duelId, token, getDuelData, () => console.log('erro'));
  }, []);

  const { id, student, duelRound } = duel;
  const { name: ownerName } = student;
  const { maxGroupParticipants, timeForQuestion, questionsPerContent } =
    duelRound;
  const status = 'waiting';

  return (
    <DuelCardBox onClick={() => appendParticipant()}>
      <DuelDetails>
        <OwnerInfo>
          <OwnerName>Duelo de {ownerName}</OwnerName>
        </OwnerInfo>
        <DuelCode>Código: {id}</DuelCode>
      </DuelDetails>
      <DuelContents>
        <SubjectsName>
          Questões por conteúdo: {questionsPerContent}
        </SubjectsName>
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
            {numParticipants}/{maxGroupParticipants * 2}
          </DuelParticipantsLabel>
          <DuelParticipantsIcon className="fas fa-users" />
        </DuelParticipants>
      </DuelStatus>
      {participateInDuelComplete && <Redirect to={`/duels/${duel.id}`} />}
    </DuelCardBox>
  );
};

export default DuelCard;
