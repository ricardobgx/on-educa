/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import { SuppliesBox } from '../../components/App/Supplies/styles';
import DuelCard from '../../components/Duels/DuelCard';
import DuelsActions from '../../components/Duels/DuelsActions';
import { getDuels } from '../../functions/duel';
import { Page } from '../../global/styles/components/pageComponents';
import OnEducaAPI from '../../services/api';
import { DEFAULT_DUEL } from '../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../store';
import { DuelRoundStatus } from '../../types/duelRoundStatus';
import { PageBox, DuelsBox, DuelsList } from './styles';

const Duels = (): JSX.Element => {
  /* Estado da aplicacao */

  const { aplication, student } = useSelector((store: RootState) => store);
  const { token, loadingAnimation } = aplication;

  const dispatch = useDispatch();
  const { loadDuel, enableLoadingAnimation, disableLoadingAnimation } =
    bindActionCreators(ActionCreators, dispatch);

  /* Estado do componente */

  const [duels, setDuels] = useState<IDuel[]>([]);

  /* Funcoes */

  const filterDuels = (duelsFound: IDuel[]): IDuel[] => {
    const duelsFiltered = duelsFound.filter((duelFound) => {
      const { duelRound } = duelFound;

      return duelRound.status === DuelRoundStatus.WAITING;
    });

    return duelsFiltered;
  };

  const duelsLoaded = (duelsFound: IDuel[]): void => {
    setDuels(filterDuels(duelsFound));
    disableLoadingAnimation();
  };

  useEffect(() => {
    if (!loadingAnimation) {
      enableLoadingAnimation();
    }
    loadDuel(DEFAULT_DUEL);
    getDuels(OnEducaAPI, token, duelsLoaded, () => console.log('erro'));
  }, []);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/" label="Duelos" />
        <SuppliesBox>
          <DuelsBox>
            <DuelsActions />
            <DuelsList className="supplies-list">
              {duels.map((duel, index) => (
                <DuelCard
                  key={duel.id}
                  duel={duel}
                  student={student}
                  token={token}
                  index={index}
                />
              ))}
            </DuelsList>
          </DuelsBox>
        </SuppliesBox>
      </PageBox>
    </Page>
  );
};

export default Duels;
