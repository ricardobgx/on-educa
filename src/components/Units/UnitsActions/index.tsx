import React, { useState } from 'react';
import { isStudent } from '../../../functions/user';
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
  userType: string;
}

const UnitsActions = (props: IUnitsActionsProps): JSX.Element => {
  /* Local State */

  const [newUnityIsVisible, setNewUnityIsVisible] = useState(false);

  /* Props */

  const { userType, getUnits } = props;

  return (
    <Container>
      {newUnityIsVisible && (
        <NewUnity
          setNewUnityIsVisible={setNewUnityIsVisible}
          getUnits={getUnits}
        />
      )}
      <SearchSupplies>
        <SearchSuppliesBox>
          <SearchSuppliesInput
            type="text"
            placeholder="Digite o nome da unidade"
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
        <UnitsActionsBox>
          <NewSuppliesButton onClick={() => setNewUnityIsVisible(true)}>
            <NewSuppliesButtonLabel>Nova unidade</NewSuppliesButtonLabel>
            <NewSuppliesButtonIcon className="fas fa-plus" />
          </NewSuppliesButton>
          <SortSuppliesButton>
            <SortSuppliesButtonLabel>Ordenar</SortSuppliesButtonLabel>
            <SortSuppliesButtonIcon className="fas fa-sort" />
          </SortSuppliesButton>
        </UnitsActionsBox>
      )}
    </Container>
  );
};

export default UnitsActions;
