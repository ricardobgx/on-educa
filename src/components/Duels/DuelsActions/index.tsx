import React from 'react';
import {
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  NewSuppliesButton,
  NewSuppliesButtonIcon,
  NewSuppliesButtonLabel,
  NewSuppliesLink,
  SearchSupplies,
  SearchSuppliesBox,
  SearchSuppliesButton,
  SearchSuppliesButtonIcon,
  SearchSuppliesInput,
} from '../../App/Supplies/styles';
import { DuelsActionsBox, DuelsActionsButtonsBox } from './styles';

const DuelsActions = (): JSX.Element => {
  return (
    <DuelsActionsBox>
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
      <DuelsActionsButtonsBox>
        <NewSuppliesLink
          className="block-shadow-button main-action bd-rd-20"
          to="/new-duel"
        >
          <NewSuppliesButtonLabel>Novo duelo</NewSuppliesButtonLabel>
          <NewSuppliesButtonIcon className="fas fa-plus" />
        </NewSuppliesLink>
        <NewSuppliesButton className="block-shadow-button main-action bd-rd-20">
          <NewSuppliesButtonLabel>Filtros</NewSuppliesButtonLabel>
          <NewSuppliesButtonIcon className="fas fa-sliders-h" />
        </NewSuppliesButton>
      </DuelsActionsButtonsBox>
    </DuelsActionsBox>
  );
};

export default DuelsActions;
