import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  SearchSupplies,
  SearchSuppliesBox,
  SearchSuppliesButton,
  SearchSuppliesButtonIcon,
  SearchSuppliesInput,
  SuppliesBox,
} from '../../App/Supplies/styles';
import {
  ContentsActionsButtons,
  Container,
  NewContentButton,
  NewContentButtonLabel,
  SortContentsButton,
  SortContentsButtonLabel,
} from './styles';

interface IContentActionsProps {
  unity: IUnity;
  isStudent: boolean;
}

const ContentsActions = (props: IContentActionsProps): JSX.Element => {
  /* Props */

  const { unity, isStudent } = props;

  return (
    <SuppliesBox>
      <Container className="supplies-actions">
        <SearchSupplies>
          <SearchSuppliesBox className="bd-rd-20">
            <SearchSuppliesInput
              type="text"
              placeholder="Digite o nome do conteúdo"
            />
            <ClearSearchSuppliesInputButton>
              <ClearSearchSuppliesInputButtonIcon className="fas fa-times" />
            </ClearSearchSuppliesInputButton>
          </SearchSuppliesBox>
          <SearchSuppliesButton className="block-shadow-button main-action bd-rd-20">
            <SearchSuppliesButtonIcon className="fas fa-search" />
          </SearchSuppliesButton>
        </SearchSupplies>
        {!isStudent && (
          <ContentsActionsButtons className="supplies-actions-buttons">
            <NewContentButton
              className="supplies-action-button block-shadow-button main-action bd-rd-20"
              to={`/units/${unity.id}/new-content`}
            >
              <NewContentButtonLabel>Novo conteúdo</NewContentButtonLabel>
              <SmallMaterialIconOutlined color="" icon="add" />
            </NewContentButton>
            <SortContentsButton className="supplies-action-button block-shadow-button main-action bd-rd-20">
              <SortContentsButtonLabel>Ordenar</SortContentsButtonLabel>
              <SmallMaterialIconOutlined color="" icon="sort" />
            </SortContentsButton>
          </ContentsActionsButtons>
        )}
      </Container>
    </SuppliesBox>
  );
};

export default ContentsActions;
