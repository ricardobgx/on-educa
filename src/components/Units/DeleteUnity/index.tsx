import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUnity as deleteUnityData } from '../../../functions/unity';
import { ICommonUnityProps } from '../../../pages/Units';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
import {
  UnityPopupBox,
  UnityPopupButton,
  UnityPopupButtonLabel,
  UnityPopupActions,
  UnityPopupLabel,
} from '../styles';

interface IUnityPopupProps extends ICommonUnityProps {
  unity: IUnity;
}

const UnityPopup = (props: IUnityPopupProps): JSX.Element => {
  /* Props */

  const { unity, getUnits } = props;

  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification, closePopup } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const deleteSucess = (): void => {
    getUnits();
    closePopup();
  };

  const deleteError = (): void => {
    showFloatNotification('Ocorreu um erro');
  };

  const deleteUnity = async (): Promise<void> => {
    deleteUnityData(OnEducaAPI, unity.id, token, deleteSucess, deleteError);
  };

  return (
    <UnityPopupBox>
      <UnityPopupLabel>
        Tem certeza que deseja excluir a unidade {unity.name}? Todos os
        conteúdos e informações associadas à essa unidade serão excluidos
      </UnityPopupLabel>
      <UnityPopupActions>
        <UnityPopupButton
          className="block-shadow-button secondary-action bd-rd-20"
          onClick={() => closePopup()}
        >
          <UnityPopupButtonLabel>Cancelar</UnityPopupButtonLabel>
        </UnityPopupButton>
        <UnityPopupButton
          className="block-shadow-button main-action bd-rd-20"
          onClick={() => deleteUnity()}
        >
          <UnityPopupButtonLabel>Excluir</UnityPopupButtonLabel>
        </UnityPopupButton>
      </UnityPopupActions>
    </UnityPopupBox>
  );
};

export default UnityPopup;
