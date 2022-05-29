import React from 'react';
import SectionLabel from '../../App/SectionLabel';
import LeaguesRankingList from './LeaguesRankingList';
import { LeaguesRankingBox } from './styles';

const LeaguesRanking: React.FC<ILeaguesRankingProps> = (props) => {
  const { league, token } = props;

  return (
    <LeaguesRankingBox>
      <SectionLabel label="Ranking" backLink="/" />
      {/* <RankingScope rankingScope={rankingScope} setRankingScope={setRankingScope} /> */}
      <LeaguesRankingList peoples={league.peoples} token={token} />
    </LeaguesRankingBox>
  );
};

export default LeaguesRanking;
