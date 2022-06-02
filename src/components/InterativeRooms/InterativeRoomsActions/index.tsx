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
  InterativeRoomsActionsBox,
  InterativeRoomsActionsButtonsBox,
  NewInterativeRoomButton,
  NewInterativeRoomButtonLabel,
  FilterInterativeRoomsButton,
  FilterInterativeRoomsButtonLabel,
} from './styles';

const InterativeRoomsActions = (): JSX.Element => {
  return (
    <InterativeRoomsActionsBox className="supplies-actions">
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
      <InterativeRoomsActionsButtonsBox className="supplies-actions-buttons">
        <NewInterativeRoomButton
          className="supplies-action-button block-shadow-button main-action bd-rd-20"
          to="/interative-rooms/new"
        >
          <NewInterativeRoomButtonLabel>Nova sala</NewInterativeRoomButtonLabel>
          <SmallMaterialIconOutlined color="" icon="add" />
        </NewInterativeRoomButton>
        <FilterInterativeRoomsButton className="supplies-action-button block-shadow-button main-action bd-rd-20">
          <FilterInterativeRoomsButtonLabel>
            Filtros
          </FilterInterativeRoomsButtonLabel>
          <SmallMaterialIconOutlined color="" icon="filter_alt" />
        </FilterInterativeRoomsButton>
      </InterativeRoomsActionsButtonsBox>
    </InterativeRoomsActionsBox>
  );
};

export default InterativeRoomsActions;
