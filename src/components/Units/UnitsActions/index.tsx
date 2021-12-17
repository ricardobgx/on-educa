import React, { useState } from 'react';
import { isStudent } from '../../../functions/user';
import { ICommonUnityProps } from '../../../pages/Units';
import NewUnity from '../NewUnity';
// import { useSelector } from 'react-redux';
// import { State } from '../../../store';
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
      {!isStudent(userType) && (
        <UnitsActionsBox>
          <NewUnityButton onClick={() => setNewUnityIsVisible(true)}>
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
