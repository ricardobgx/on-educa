import React from 'react';
import { useSelector } from 'react-redux';
import LeaguesRanking from '../../components/Leagues/LeaguesRanking';
import {
  Page,
  PageBoxColumn,
} from '../../global/styles/components/pageComponents';
import { RootState } from '../../store';
import { LeaguesBox } from './styles';

const Leagues: React.FC = () => {
  const { people, aplication } = useSelector((store: RootState) => store);

  return (
    <Page>
      <PageBoxColumn>
        <LeaguesBox>
          <LeaguesRanking league={people.league} token={aplication.token} />
          <LeaguesRanking league={people.league} token={aplication.token} />
        </LeaguesBox>
      </PageBoxColumn>
    </Page>
  );
};

export default Leagues;
