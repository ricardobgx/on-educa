import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import TeamsResults from '../../components/DuelResults/TeamsResults';
import { getDuel } from '../../functions/duel';
import { sortTeams } from '../../functions/duelTeam';
import { isDefaultDuel } from '../../functions/entitiesValues';
import { Page } from '../../global/styles/components/pageComponents';
import OnEducaAPI from '../../services/api';
import { ActionCreators, State } from '../../store';
import { PageBox } from './styles';

interface IDuelResultsRouteParams {
  id: string;
}

const DuelResults = (): JSX.Element => {
  /* Propriedades da rota */
  const route = useRouteMatch();
  const { id: duelId } = route.params as IDuelResultsRouteParams;

  /* Estado da aplicacao */
  const { aplication, duel } = useSelector((store: State) => store);
  const { token } = aplication;

  const dispatch = useDispatch();
  const { loadDuel } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    if (isDefaultDuel(duel)) {
      getDuel(OnEducaAPI, duelId, token, loadDuel, () => console.log('erro'));
    }
  }, [token]);

  const { duelRound } = duel;
  const { teams: unsortedTeams } = duelRound;
  const teams = sortTeams(unsortedTeams);

  return (
    <Page>
      <PageBox>
        <TeamsResults teams={teams} />
      </PageBox>
    </Page>
  );
};

export default DuelResults;
