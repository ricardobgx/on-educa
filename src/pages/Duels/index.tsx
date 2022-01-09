import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import DuelCard from '../../components/Duels/DuelCard';
import { getDuels } from '../../functions/duel';
import { Page } from '../../global/styles/components/pageComponents';
import { IDuel } from '../../interfaces/IDuel';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import {
  PageBox,
  DuelsBox,
  DuelsActions,
  NewDuelButton,
  NewDuelButtonLabel,
  NewDuelButtonIcon,
  SearchDuels,
  SearchDuelsInputBox,
  SearchDuelsInput,
  ClearSearchDuelsInputButton,
  ClearSearchDuelsInputButtonIcon,
  SearchDuelsButton,
  SearchDuelsButtonIcon,
  DuelsFiltersButton,
  DuelsFiltersButtonLabel,
  DuelsFiltersButtonIcon,
  DuelsList,
  DuelsActionsBox,
  DuelsListBox,
} from './styles';

const Duels = (): JSX.Element => {
  /* Estado da aplicacao */

  const { aplication } = useSelector((store: State) => store);
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
          <DuelsActions>
            <SearchDuels>
              <SearchDuelsInputBox>
                <SearchDuelsInput
                  type="text"
                  placeholder="Digite algo (código do duelo, nome do aluno)"
                />
                <ClearSearchDuelsInputButton>
                  <ClearSearchDuelsInputButtonIcon className="fas fa-times" />
                </ClearSearchDuelsInputButton>
              </SearchDuelsInputBox>
              <SearchDuelsButton>
                <SearchDuelsButtonIcon className="fas fa-search" />
              </SearchDuelsButton>
            </SearchDuels>
            <DuelsActionsBox>
              <NewDuelButton to="/new-duel">
                <NewDuelButtonLabel>Novo duelo</NewDuelButtonLabel>
                <NewDuelButtonIcon className="fas fa-plus" />
              </NewDuelButton>
              <DuelsFiltersButton>
                <DuelsFiltersButtonLabel>Filtros</DuelsFiltersButtonLabel>
                <DuelsFiltersButtonIcon className="fas fa-sliders-h" />
              </DuelsFiltersButton>
            </DuelsActionsBox>
          </DuelsActions>
          <DuelsList>
            <DuelsListBox>
              {duels.map((duel) => (
                <DuelCard key={duel.id} duelId={duel.id} />
              ))}
            </DuelsListBox>
          </DuelsList>
        </DuelsBox>
      </PageBox>
    </Page>
  );
};

export default Duels;
