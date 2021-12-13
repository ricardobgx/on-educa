import React from 'react';
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
}

const ContentsActions = (props: IContentActionsProps): JSX.Element => {
  /* Props */

  const { unity } = props;

  const isTeacher = true;

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
      {isTeacher && (
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
