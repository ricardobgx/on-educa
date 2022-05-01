import React, { useState } from 'react';
import { ICommonUnityProps } from '../../../pages/Units';
import {
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  NewSuppliesButton,
  NewSuppliesButtonIcon,
  NewSuppliesButtonLabel,
  SearchSupplies,
  SearchSuppliesBox,
  SearchSuppliesButton,
  SearchSuppliesButtonIcon,
  SearchSuppliesInput,
  SortSuppliesButton,
  SortSuppliesButtonIcon,
  SortSuppliesButtonLabel,
} from '../../App/Supplies/styles';
import NewUnity from '../NewUnity';
import { UnitsActionsBox, Container } from './styles';

interface IUnitsActionsProps extends ICommonUnityProps {
  isStudent: boolean;
}

const UnitsActions = (props: IUnitsActionsProps): JSX.Element => {
  /* Local State */

  const [newUnityIsVisible, setNewUnityIsVisible] = useState(false);

  /* Props */

  const { isStudent, getUnits } = props;

  return (
    <Container>
      {newUnityIsVisible && (
        <NewUnity
          setNewUnityIsVisible={setNewUnityIsVisible}
          getUnits={getUnits}
        />
      )}
      <SearchSupplies>
        <SearchSuppliesBox className="bd-rd-20">
          <SearchSuppliesInput
            type="text"
            placeholder="Digite o nome da unidade"
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
        <UnitsActionsBox>
          <NewSuppliesButton
            className="block-shadow-button main-action bd-rd-20"
            onClick={() => setNewUnityIsVisible(true)}
          >
            <NewSuppliesButtonLabel>Nova unidade</NewSuppliesButtonLabel>
            <NewSuppliesButtonIcon className="fas fa-plus" />
          </NewSuppliesButton>
          <SortSuppliesButton className="block-shadow-button main-action bd-rd-20">
            <SortSuppliesButtonLabel>Ordenar</SortSuppliesButtonLabel>
            <SortSuppliesButtonIcon className="fas fa-sort" />
          </SortSuppliesButton>
        </UnitsActionsBox>
      )}
    </Container>
  );
};

export default UnitsActions;
