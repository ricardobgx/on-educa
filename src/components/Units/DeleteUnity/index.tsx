import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUnity as deleteUnityData } from '../../../functions/unity';
import { ICommonUnityProps } from '../../../pages/Units';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
import {
  DeleteUnityBackground,
  DeleteUnityBox,
  CloseDeleteUnityButton,
  CloseDeleteUnityIcon,
  DeleteUnityLabel,
  DeleteUnityWarningLabel,
  DeleteUnityButton,
  DeleteUnityButtonLabel,
  CancelDeleteUnityButton,
  CancelDeleteUnityButtonLabel,
  DeleteUnityActions,
} from './styles';

interface IDeleteUnityProps extends ICommonUnityProps {
  unity: IUnity;
  setDeleteUnityIsVisible: (value: boolean) => void;
}

const DeleteUnity = (props: IDeleteUnityProps): JSX.Element => {
  /* Props */

  const { unity, setDeleteUnityIsVisible, getUnits } = props;

  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const deleteSucess = (): void => {
    getUnits();
    setDeleteUnityIsVisible(false);
  };

  const deleteError = (): void => {
    showFloatNotification('Ocorreu um erro');
  };

  const deleteUnity = async (): Promise<void> => {
    deleteUnityData(OnEducaAPI, unity.id, token, deleteSucess, deleteError);
  };

  return (
    <DeleteUnityBackground>
      <DeleteUnityBox>
        <CloseDeleteUnityButton onClick={() => setDeleteUnityIsVisible(false)}>
          <CloseDeleteUnityIcon className="fas fa-times" />
        </CloseDeleteUnityButton>
        <DeleteUnityLabel>Excluir unidade</DeleteUnityLabel>
        <DeleteUnityWarningLabel>
          Tem certeza que deseja excluir a unidade {unity.name}? Todos os
          conteúdos e informações associadas à essa unidade serão excluidos
        </DeleteUnityWarningLabel>
        <DeleteUnityActions>
          <CancelDeleteUnityButton
            onClick={() => setDeleteUnityIsVisible(false)}
          >
            <CancelDeleteUnityButtonLabel>
              Cancelar
            </CancelDeleteUnityButtonLabel>
          </CancelDeleteUnityButton>
          <DeleteUnityButton onClick={() => deleteUnity()}>
            <DeleteUnityButtonLabel>Excluir</DeleteUnityButtonLabel>
          </DeleteUnityButton>
        </DeleteUnityActions>
      </DeleteUnityBox>
    </DeleteUnityBackground>
  );
};

export default DeleteUnity;
