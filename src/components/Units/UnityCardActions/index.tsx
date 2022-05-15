import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  EditUnityButton,
  DeleteUnityButton,
  UnityCardActionsBox,
} from './styles';

interface IUnityCardActionsProps {
  unity: IUnity;
  setUnity: (value: IUnity) => void;
  setUpdateUnityIsVisible: (value: boolean) => void;
  setDeleteUnityIsVisible: (value: boolean) => void;
}

const UnityCardActions = (props: IUnityCardActionsProps): JSX.Element => {
  /* Props */

  const { unity, setUnity, setUpdateUnityIsVisible, setDeleteUnityIsVisible } =
    props;

  return (
    <UnityCardActionsBox className="supplies-card-actions">
      <EditUnityButton
        className="supplies-card-action-button block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          setUnity(unity);
          setUpdateUnityIsVisible(true);
        }}
      >
        <SmallMaterialIconOutlined color="" icon="edit" />
      </EditUnityButton>
      <DeleteUnityButton
        className="supplies-card-action-button block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          setUnity(unity);
          setDeleteUnityIsVisible(true);
        }}
      >
        <SmallMaterialIconOutlined color="" icon="delete" />
      </DeleteUnityButton>
    </UnityCardActionsBox>
  );
};

export default UnityCardActions;
