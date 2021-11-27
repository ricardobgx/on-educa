import React from 'react';
import { IStudent } from '../../../interfaces/IStudent';
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

const ParticipantCard = (props: IStudent): JSX.Element => {
  const { name, profilePicture, schoolGrade } = props;

  const leagueColor = (): string => {
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
        <ParticipantLeague className="fas fa-trophy" color={leagueColor()} />
      </ParticipantInfo>
      <KickOutButton>
        <KickOutButtonIcon className="fas fa-times" />
      </KickOutButton>
    </ParticipantCardBox>
  );
};

export default ParticipantCard;
