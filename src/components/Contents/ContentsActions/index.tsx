import React from 'react';
import { isStudent } from '../../../functions/user';
import { IUnity } from '../../../interfaces/IUnity';
import {
  ContentsActionsBox,
  SearchContents,
  SearchContentsInputBox,
  SearchContentsInput,
  ClearSearchContentsInputButton,
  ClearSearchContentsInputButtonIcon,
  SearchContentsButton,
  SearchContentsButtonIcon,
  NewContentButton,
  NewContentButtonLabel,
  NewContentButtonIcon,
  ContentsFiltersButton,
  ContentsFiltersButtonLabel,
  ContentsFiltersButtonIcon,
  Container,
} from './styles';

interface IContentActionsProps {
  unity: IUnity;
  userType: string;
}

const ContentsActions = (props: IContentActionsProps): JSX.Element => {
  /* Props */

  const { unity, userType } = props;

  return (
    <Container>
      <SearchContents>
        <SearchContentsInputBox>
          <SearchContentsInput
            type="text"
            placeholder="Digite algo (nome da unidade)"
          />
          <ClearSearchContentsInputButton>
            <ClearSearchContentsInputButtonIcon className="fas fa-times" />
          </ClearSearchContentsInputButton>
        </SearchContentsInputBox>
        <SearchContentsButton>
          <SearchContentsButtonIcon className="fas fa-search" />
        </SearchContentsButton>
      </SearchContents>
      {!isStudent(userType) && (
        <ContentsActionsBox>
          <NewContentButton to={`/units/${unity.id}/new-content`}>
            <NewContentButtonLabel>Novo conteúdo</NewContentButtonLabel>
            <NewContentButtonIcon className="fas fa-plus" />
          </NewContentButton>
          <ContentsFiltersButton>
            <ContentsFiltersButtonLabel>Ordenar</ContentsFiltersButtonLabel>
            <ContentsFiltersButtonIcon className="fas fa-sort" />
          </ContentsFiltersButton>
        </ContentsActionsBox>
      )}
    </Container>
  );
};

export default ContentsActions;
