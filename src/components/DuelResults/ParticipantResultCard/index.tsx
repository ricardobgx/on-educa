import React from 'react';
import { IDuelParticipant } from '../../../interfaces/DuelParticipant';
import {
  ParticipantCardBox,
  ParticipantInfo,
  ParticipantPicture,
  ParticipantDetails,
  ParticipantName,
  ParticipantSchoolGrade,
  ParticipantLeague,
  KickOutButton,
  KickOutButtonIcon,
  ParticipantDetailsBox,
} from './styles';

const ParticipantResultCard = (props: IDuelParticipant): JSX.Element => {
  const { name, profilePicture, schoolGrade, league } = props;

  const leagueColor = (userLeague: string): string => {
    return '#43DDF2';
  };

  return (
    <ParticipantCardBox>
      <ParticipantInfo>
        <ParticipantDetails>
          <ParticipantPicture src={profilePicture} />
          <ParticipantDetailsBox>
            <ParticipantName>{name}</ParticipantName>
            <ParticipantSchoolGrade>{schoolGrade}º ano</ParticipantSchoolGrade>
          </ParticipantDetailsBox>
        </ParticipantDetails>
        <ParticipantLeague
          className="fas fa-trophy"
          color={leagueColor(league)}
        />
      </ParticipantInfo>
    </ParticipantCardBox>
  );
};

export default ParticipantResultCard;
