import React from 'react';
import {
  EditSuppliesButton,
  EditSuppliesButtonIcon,
  DeleteSuppliesButton,
  DeleteSuppliesButtonIcon,
} from '../../App/Supplies/styles';
import { UnityCardActionsBox } from './styles';

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
    <UnityCardActionsBox>
      <EditSuppliesButton
        className="block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          setUnity(unity);
          setUpdateUnityIsVisible(true);
        }}
      >
        <EditSuppliesButtonIcon className="fas fa-pen" />
      </EditSuppliesButton>
      <DeleteSuppliesButton
        className="block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          setUnity(unity);
          setDeleteUnityIsVisible(true);
        }}
      >
        <DeleteSuppliesButtonIcon className="fas fa-trash" />
      </DeleteSuppliesButton>
    </UnityCardActionsBox>
  );
};

export default UnityCardActions;
