import React from 'react';
import { IUnity } from '../../../interfaces/IUnity';
import {
  UnityCardActionsBox,
  EditUnityButton,
  EditUnityButtonIcon,
  DeleteUnityButton,
  DeleteUnityButtonIcon,
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
    <UnityCardActionsBox>
      <EditUnityButton
        onClick={() => {
          setUnity(unity);
          setUpdateUnityIsVisible(true);
        }}
      >
        <EditUnityButtonIcon className="fas fa-pen" />
      </EditUnityButton>
      <DeleteUnityButton
        onClick={() => {
          setUnity(unity);
          setDeleteUnityIsVisible(true);
        }}
      >
        <DeleteUnityButtonIcon className="fas fa-trash" />
      </DeleteUnityButton>
    </UnityCardActionsBox>
  );
};

export default UnityCardActions;
