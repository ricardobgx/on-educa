/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import DuelCard from '../../components/Duels/DuelCard';
import DuelsActions from '../../components/Duels/DuelsActions';
import { getDuels } from '../../functions/duel';
import { Page } from '../../global/styles/components/pageComponents';
import { IDuel } from '../../interfaces/IDuel';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { PageBox, DuelsBox, DuelsList, DuelsListBox } from './styles';

const Duels = (): JSX.Element => {
  /* Estado da aplicacao */

  const { aplication, people } = useSelector((store: State) => store);
  const { token } = aplication;

  /* Estado do componente */

  const [duels, setDuels] = useState<IDuel[]>([]);

  useEffect(() => {
    getDuels(OnEducaAPI, token, setDuels, () => console.log('erro'));
  }, []);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/home" label="Duelos" />
        <DuelsBox>
          <DuelsActions />
          <DuelsList>
            <DuelsListBox>
              {duels.map((duel) => (
                <DuelCard key={duel.id} duelId={duel.id} student={people} />
              ))}
            </DuelsListBox>
          </DuelsList>
        </DuelsBox>
      </PageBox>
    </Page>
  );
};

export default Duels;
