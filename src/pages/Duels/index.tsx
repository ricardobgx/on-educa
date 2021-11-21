import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../components';
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
} from './styles';

const Duels = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/home" label="Duelos" />
        <DuelsBox>
          <DuelsActions>
            <SearchDuels>
              <SearchDuelsInputBox>
                <SearchDuelsInput type="text" />
                <ClearSearchDuelsInputButton>
                  <ClearSearchDuelsInputButtonIcon className="fas fa-times" />
                </ClearSearchDuelsInputButton>
              </SearchDuelsInputBox>
              <SearchDuelsButton>
                <SearchDuelsButtonIcon className="fas fa-search" />
              </SearchDuelsButton>
            </SearchDuels>
            <DuelsActionsBox>
              <NewDuelButton>
                <NewDuelButtonLabel>Novo duelo</NewDuelButtonLabel>
                <NewDuelButtonIcon className="fas fa-plus" />
              </NewDuelButton>
              <DuelsFiltersButton>
                <DuelsFiltersButtonLabel>Filtros</DuelsFiltersButtonLabel>
                <DuelsFiltersButtonIcon className="fas fa-sliders-h" />
              </DuelsFiltersButton>
            </DuelsActionsBox>
          </DuelsActions>
          <DuelsList />
        </DuelsBox>
      </PageBox>
    </Page>
  );
};

export default Duels;
