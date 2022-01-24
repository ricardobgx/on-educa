import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getDuel } from '../../../functions/duel';
import {
  duelRoundStatusIcon,
  duelRoundStatusLabel,
} from '../../../functions/duelRound';
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

  const getDuelData = async (duelFound: IDuel): Promise<void> => {
    const { duelRound } = duelFound;
    setNumParticipants(participatesInDuelCounter(duelRound.teams));
    setDuel(duelFound);
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

  const { id, code, student, duelRound } = duel;
  const { name: ownerName } = student;
  const { status, maxGroupParticipants, timeForQuestion, questionsPerContent } =
    duelRound;

  return (
    <DuelCardBox
      onClick={() => appendParticipant()}
      className="with-shadow bd-rd-5"
    >
      <DuelDetails>
        <OwnerInfo>
          <OwnerName>Duelo de {ownerName}</OwnerName>
        </OwnerInfo>
        <DuelCode>Código: {code}</DuelCode>
      </DuelDetails>
      <DuelContents>
        <SubjectsName>
          Questões por conteúdo: {questionsPerContent}
        </SubjectsName>
        <ContentsName>
          Tempo para responder: {timeForQuestion} minuto(s)
        </ContentsName>
      </DuelContents>
      <DuelStatus>
        <DuelStatusBox>
          <DuelStatusLabel>{duelRoundStatusLabel(status)}</DuelStatusLabel>
          <DuelStatusIcon className={`fas fa-${duelRoundStatusIcon(status)}`} />
        </DuelStatusBox>
        <DuelParticipants>
          <DuelParticipantsLabel>
            {numParticipants}/{maxGroupParticipants * 2}
          </DuelParticipantsLabel>
          <DuelParticipantsIcon className="fas fa-users" />
        </DuelParticipants>
      </DuelStatus>
      {participateInDuelComplete && <Redirect to={`/duels/${id}`} />}
    </DuelCardBox>
  );
};

export default DuelCard;
