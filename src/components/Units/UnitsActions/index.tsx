import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../store';
import {
  UnitsActionsBox,
  SearchUnits,
  SearchUnitsInputBox,
  SearchUnitsInput,
  ClearSearchUnitsInputButton,
  ClearSearchUnitsInputButtonIcon,
  SearchUnitsButton,
  SearchUnitsButtonIcon,
  NewUnityButton,
  NewUnityButtonLabel,
  NewUnityButtonIcon,
  UnitsFiltersButton,
  UnitsFiltersButtonLabel,
  UnitsFiltersButtonIcon,
  Container,
} from './styles';

const UnitsActions = (): JSX.Element => {
  const { subject } = useSelector((store: State) => store);

  const isTeacher = true;

  return (
    <Container>
      <SearchUnits>
        <SearchUnitsInputBox>
          <SearchUnitsInput
            type="text"
            placeholder="Digite algo (nome da unidade)"
          />
          <ClearSearchUnitsInputButton>
            <ClearSearchUnitsInputButtonIcon className="fas fa-times" />
          </ClearSearchUnitsInputButton>
        </SearchUnitsInputBox>
        <SearchUnitsButton>
          <SearchUnitsButtonIcon className="fas fa-search" />
        </SearchUnitsButton>
      </SearchUnits>
      {isTeacher && (
        <UnitsActionsBox>
          <NewUnityButton to={`/subjects/${subject.id}/new-unity`}>
            <NewUnityButtonLabel>Nova unidade</NewUnityButtonLabel>
            <NewUnityButtonIcon className="fas fa-plus" />
          </NewUnityButton>
          <UnitsFiltersButton>
            <UnitsFiltersButtonLabel>Ordenar</UnitsFiltersButtonLabel>
            <UnitsFiltersButtonIcon className="fas fa-sort" />
          </UnitsFiltersButton>
        </UnitsActionsBox>
      )}
    </Container>
  );
};

export default UnitsActions;
