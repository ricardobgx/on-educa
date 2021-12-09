import React from 'react';
import { IDuelParticipant } from '../../../interfaces/IDuelParticipant';
import {
  ParticipantCardBox,
  ParticipantInfo,
  ParticipantPicture,
  ParticipantDetails,
  ParticipantName,
  ParticipantSchoolGrade,
  ParticipantLeague,
  ParticipantDetailsBox,
} from './styles';

const ParticipantResultCard = (props: IDuelParticipant): JSX.Element => {
  const { name, profilePicture, schoolGradeId } = props;

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
            <ParticipantSchoolGrade>
              {schoolGradeId}º ano
            </ParticipantSchoolGrade>
          </ParticipantDetailsBox>
        </ParticipantDetails>
        <ParticipantLeague className="fas fa-trophy" color={leagueColor()} />
      </ParticipantInfo>
    </ParticipantCardBox>
  );
};

export default ParticipantResultCard;
