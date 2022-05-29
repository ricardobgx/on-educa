import React from 'react';
import { handleLeagueName } from '../../../utils/league';
import League from '../League';
import {
  CurrentLeague,
  LeagueName,
  LeaguesRankingBox,
  LeaguesRankingLabel,
  LeaguesRankingLeagues,
  NextLeague,
  PreviousLeague,
} from './styles';

const LeaguesRanking: React.FC = () => {
  return (
    <LeaguesRankingBox className="with-shadow bd-rd-20">
      <LeaguesRankingLabel>Ranking</LeaguesRankingLabel>
      <LeaguesRankingLeagues>
        <PreviousLeague>
          <League type={0} level={1} />
          <LeagueName>{handleLeagueName(0)} 1</LeagueName>
        </PreviousLeague>
        <CurrentLeague>
          <League type={0} level={2} />
          <LeagueName>{handleLeagueName(0)} 2</LeagueName>
        </CurrentLeague>
        <NextLeague>
          <League type={0} level={3} />
          <LeagueName>{handleLeagueName(0)} 3</LeagueName>
        </NextLeague>
      </LeaguesRankingLeagues>
    </LeaguesRankingBox>
  );
};

export default LeaguesRanking;
