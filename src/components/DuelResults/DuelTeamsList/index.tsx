import React from 'react';
import DuelTeamResult from '../DuelTeamResult';
import { DuelTeamsListBox } from './styles';

interface IDuelTeamsListProps {
  teams: IDuelTeam[];
}

const DuelTeamsList = (props: IDuelTeamsListProps): JSX.Element => {
  const { teams } = props;

  return (
    <DuelTeamsListBox>
      {teams.map((team) => (
        <DuelTeamResult team={team} />
      ))}
    </DuelTeamsListBox>
  );
};

export default DuelTeamsList;
