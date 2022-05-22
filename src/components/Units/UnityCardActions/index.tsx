import React from 'react';
import { ICommonUnityProps } from '../../../pages/Units';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import DeleteUnity from '../DeleteUnity';
import UpdateUnity from '../UpdateUnity';
import {
  EditUnityButton,
  DeleteUnityButton,
  UnityCardActionsBox,
} from './styles';

interface IUnityCardActionsProps extends ICommonUnityProps {
  unity: IUnity;
  loadPopup: (popup: IPopup) => void;
}

const UnityCardActions = (props: IUnityCardActionsProps): JSX.Element => {
  /* Props */

  const { unity, loadPopup, getUnits } = props;

  return (
    <UnityCardActionsBox className="supplies-card-actions">
      <EditUnityButton
        className="supplies-card-action-button block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          loadPopup({
            title: 'Atualizar unidade',
            Children: UpdateUnity,
            childrenProps: { unity, getUnits },
          });
        }}
      >
        <SmallMaterialIconOutlined color="" icon="edit" />
      </EditUnityButton>
      <DeleteUnityButton
        className="supplies-card-action-button block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          loadPopup({
            title: 'Excluir unidade',
            Children: DeleteUnity,
            childrenProps: { unity, getUnits },
          });
        }}
      >
        <SmallMaterialIconOutlined color="" icon="delete" />
      </DeleteUnityButton>
    </UnityCardActionsBox>
  );
};

export default UnityCardActions;
