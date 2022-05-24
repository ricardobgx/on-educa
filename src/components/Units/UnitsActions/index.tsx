import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICommonUnityProps } from '../../../pages/Units';
import { ActionCreators } from '../../../store';
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
import NewUnity from '../NewUnity';
import {
  UnitsActionsBox,
  Container,
  SortUnitsButton,
  SortUnitsButtonLabel,
  NewUnityButton,
  NewUnityButtonLabel,
} from './styles';

interface IUnitsActionsProps extends ICommonUnityProps {
  isStudent: boolean;
}

const UnitsActions = (props: IUnitsActionsProps): JSX.Element => {
  const dispatch = useDispatch();
  const { loadPopup } = bindActionCreators(ActionCreators, dispatch);

  /* Props */

  const { isStudent, getUnits } = props;

  return (
    <SuppliesBox>
      <Container className="supplies-actions">
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
          <UnitsActionsBox className="supplies-actions-buttons">
            <NewUnityButton
              className="supplies-action-button block-shadow-button main-action bd-rd-20"
              onClick={() =>
                loadPopup({
                  title: 'Nova unidade',
                  Children: NewUnity,
                  childrenProps: { getUnits },
                })
              }
            >
              <NewUnityButtonLabel>Nova unidade</NewUnityButtonLabel>
              <SmallMaterialIconOutlined color="" icon="add" />
            </NewUnityButton>
            <SortUnitsButton className="supplies-action-button block-shadow-button main-action bd-rd-20">
              <SortUnitsButtonLabel>Ordenar</SortUnitsButtonLabel>
              <SmallMaterialIconOutlined color="" icon="sort" />
            </SortUnitsButton>
          </UnitsActionsBox>
        )}
      </Container>
    </SuppliesBox>
  );
};

export default UnitsActions;
