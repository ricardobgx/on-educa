import React from 'react';
import LeaguesPeopleRankingCard from '../LeaguesPeopleRankingCard';
import { LeaguesRankingListBox } from './styles';

const LeaguesRankingList: React.FC<ILeaguesRankingListProps> = (props) => {
  const { peoples, token } = props;

  return (
    <LeaguesRankingListBox>
      {peoples.map((people) => (
        <LeaguesPeopleRankingCard people={people} token={token} />
      ))}
    </LeaguesRankingListBox>
  );
};

export default LeaguesRankingList;
