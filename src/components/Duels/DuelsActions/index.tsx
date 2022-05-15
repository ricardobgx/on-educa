import React from 'react';
import {
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  SearchSupplies,
  SearchSuppliesBox,
  SearchSuppliesButton,
  SearchSuppliesButtonIcon,
  SearchSuppliesInput,
} from '../../App/Supplies/styles';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  DuelsActionsBox,
  DuelsActionsButtonsBox,
  NewDuelButton,
  NewDuelButtonLabel,
  FilterDuelsButton,
  FilterDuelsButtonLabel,
} from './styles';

const DuelsActions = (): JSX.Element => {
  return (
    <DuelsActionsBox className="supplies-actions">
      <SearchSupplies>
        <SearchSuppliesBox className="bd-rd-20">
          <SearchSuppliesInput
            type="text"
            placeholder="Digite algo (código do duelo, nome do aluno)"
          />
          <ClearSearchSuppliesInputButton>
            <ClearSearchSuppliesInputButtonIcon className="fas fa-times" />
          </ClearSearchSuppliesInputButton>
        </SearchSuppliesBox>
        <SearchSuppliesButton className="block-shadow-button main-action bd-rd-20">
          <SearchSuppliesButtonIcon className="fas fa-search" />
        </SearchSuppliesButton>
      </SearchSupplies>
      <DuelsActionsButtonsBox className="supplies-actions-buttons">
        <NewDuelButton
          className="supplies-action-button block-shadow-button main-action bd-rd-20"
          to="/new-duel"
        >
          <NewDuelButtonLabel>Novo duelo</NewDuelButtonLabel>
          <SmallMaterialIconOutlined color="" icon="add" />
        </NewDuelButton>
        <FilterDuelsButton className="supplies-action-button block-shadow-button main-action bd-rd-20">
          <FilterDuelsButtonLabel>Filtros</FilterDuelsButtonLabel>
          <SmallMaterialIconOutlined color="" icon="filter_alt" />
        </FilterDuelsButton>
      </DuelsActionsButtonsBox>
    </DuelsActionsBox>
  );
};

export default DuelsActions;
