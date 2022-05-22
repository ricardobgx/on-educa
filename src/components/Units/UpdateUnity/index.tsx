import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUnity as updateUnityData } from '../../../functions/unity';
import { ICommonUnityProps } from '../../../pages/Units';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
import {
  UnityPopupBox,
  UnityPopupInput,
  UnityPopupButton,
  UnityPopupButtonLabel,
  UnityPopupActions,
} from '../styles';

interface IUpdateUnityProps extends ICommonUnityProps {
  unity: IUnity;
}

const UpdateUnity = (props: IUpdateUnityProps): JSX.Element => {
  const dispatch = useDispatch();
  const { showFloatNotification, closePopup } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Props */

  const { unity, getUnits } = props;

  /* LocalRootState */

  const [name, setName] = useState(unity.name);

  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const updateSucess = (): void => {
    getUnits();
    closePopup();
  };

  const updateError = (): void => {
    showFloatNotification('erro');
  };

  const updateUnity = async (): Promise<void> => {
    updateUnityData(
      OnEducaAPI,
      unity.id,
      { name },
      token,
      updateSucess,
      updateError,
    );
  };

  return (
    <UnityPopupBox>
      <UnityPopupInput
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
        value={name}
        type="text"
        placeholder="Título da unidade"
      />
      <UnityPopupActions>
        <UnityPopupButton
          className="block-shadow-button secondary-action bd-rd-20"
          onClick={() => closePopup()}
        >
          <UnityPopupButtonLabel>Cancelar</UnityPopupButtonLabel>
        </UnityPopupButton>
        <UnityPopupButton
          className="block-shadow-button main-action bd-rd-20"
          onClick={() => updateUnity()}
        >
          <UnityPopupButtonLabel>Salvar</UnityPopupButtonLabel>
        </UnityPopupButton>
      </UnityPopupActions>
    </UnityPopupBox>
  );
};

export default UpdateUnity;
