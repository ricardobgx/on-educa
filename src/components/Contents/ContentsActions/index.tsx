import React from 'react';
import { isStudent } from '../../../functions/user';
import { IUnity } from '../../../interfaces/IUnity';
import {
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  NewSuppliesButtonIcon,
  NewSuppliesButtonLabel,
  NewSuppliesLink,
  SearchSupplies,
  SearchSuppliesBox,
  SearchSuppliesButton,
  SearchSuppliesButtonIcon,
  SearchSuppliesInput,
  SortSuppliesButton,
  SortSuppliesButtonIcon,
  SortSuppliesButtonLabel,
} from '../../App/Supplies/styles';
import { ContentsActionsBox, Container } from './styles';

interface IContentActionsProps {
  unity: IUnity;
  userType: string;
}

const ContentsActions = (props: IContentActionsProps): JSX.Element => {
  /* Props */

  const { unity, userType } = props;

  return (
    <Container>
      <SearchSupplies>
        <SearchSuppliesBox>
          <SearchSuppliesInput
            type="text"
            placeholder="Digite o nome do conteúdo"
          />
          <ClearSearchSuppliesInputButton>
            <ClearSearchSuppliesInputButtonIcon className="fas fa-times" />
          </ClearSearchSuppliesInputButton>
        </SearchSuppliesBox>
        <SearchSuppliesButton>
          <SearchSuppliesButtonIcon className="fas fa-search" />
        </SearchSuppliesButton>
      </SearchSupplies>
      {!isStudent(userType) && (
        <ContentsActionsBox>
          <NewSuppliesLink to={`/units/${unity.id}/new-content`}>
            <NewSuppliesButtonLabel>Novo conteúdo</NewSuppliesButtonLabel>
            <NewSuppliesButtonIcon className="fas fa-plus" />
          </NewSuppliesLink>
          <SortSuppliesButton>
            <SortSuppliesButtonLabel>Ordenar</SortSuppliesButtonLabel>
            <SortSuppliesButtonIcon className="fas fa-sort" />
          </SortSuppliesButton>
        </ContentsActionsBox>
      )}
    </Container>
  );
};

export default ContentsActions;
