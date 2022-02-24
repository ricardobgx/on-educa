import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import winners from '../../assets/ilustrations/undraw_winners.png';
import { getDuel } from '../../functions/duel';
import { isDefaultDuel } from '../../functions/entitiesValues';
import OnEducaAPI from '../../services/api';
import { ActionCreators, State } from '../../store';
import {
  SeeResultsButtonLabel,
  CongratulationsLabel,
  Page,
  PageBox,
  SeeResultsButton,
  CongratulationsImage,
} from './styles';

interface IDuelCongratulationsRouteParams {
  id: string;
}

const DuelCongratulations = (): JSX.Element => {
  const route = useRouteMatch();
  const { id: duelId } = route.params as IDuelCongratulationsRouteParams;

  const dispatch = useDispatch();
  const { loadDuel } = bindActionCreators(ActionCreators, dispatch);

  const { duel, aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  useEffect(() => {
    getDuel(OnEducaAPI, duelId, token, loadDuel, () => console.log('erro'));
  }, [token]);

  const { duelRound } = duel;

  console.log(duelRound);

  return (
    <Page>
      <PageBox>
        <CongratulationsLabel>
          {duelRound?.winnerTeam
            ? `${duelRound.winnerTeam.name} venceu!!!`
            : 'Empate'}
        </CongratulationsLabel>
        <CongratulationsImage src={winners} />
        <SeeResultsButton to={`/duels/${duelId}/results`}>
          <SeeResultsButtonLabel>Ver desempenho</SeeResultsButtonLabel>
        </SeeResultsButton>
      </PageBox>
    </Page>
  );
};

export default DuelCongratulations;
