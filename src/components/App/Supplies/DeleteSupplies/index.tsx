import React from 'react';
import {
  DeleteSuppliesBackground,
  DeleteSuppliesBox,
  CloseDeleteSuppliesButton,
  CloseDeleteSuppliesIcon,
  DeleteSuppliesLabel,
  DeleteSuppliesWarningLabel,
  DeleteSuppliesButton,
  DeleteSuppliesButtonLabel,
  CancelDeleteSuppliesButton,
  CancelDeleteSuppliesButtonLabel,
  DeleteSuppliesActions,
} from './styles';

interface IDeleteSuppliesProps {
  suppliesLabel: string;
  suppliesType: string;
  deleteSupplies: () => void;
  setDeleteSuppliesIsVisible: (value: boolean) => void;
}

const DeleteSupplies = (props: IDeleteSuppliesProps): JSX.Element => {
  /* Props */

  const {
    suppliesLabel,
    suppliesType,
    deleteSupplies,
    setDeleteSuppliesIsVisible,
  } = props;

  return (
    <DeleteSuppliesBackground>
      <DeleteSuppliesBox>
        <CloseDeleteSuppliesButton
          onClick={() => setDeleteSuppliesIsVisible(false)}
        >
          <CloseDeleteSuppliesIcon className="fas fa-times" />
        </CloseDeleteSuppliesButton>
        <DeleteSuppliesLabel>Excluir {suppliesType}</DeleteSuppliesLabel>
        <DeleteSuppliesWarningLabel>
          Tem certeza que deseja excluir {suppliesLabel}? Todas as informações
          associadas à(ao) {suppliesType} serão removidas.
        </DeleteSuppliesWarningLabel>
        <DeleteSuppliesActions>
          <CancelDeleteSuppliesButton
            onClick={() => setDeleteSuppliesIsVisible(false)}
          >
            <CancelDeleteSuppliesButtonLabel>
              Cancelar
            </CancelDeleteSuppliesButtonLabel>
          </CancelDeleteSuppliesButton>
          <DeleteSuppliesButton onClick={() => deleteSupplies()}>
            <DeleteSuppliesButtonLabel>Excluir</DeleteSuppliesButtonLabel>
          </DeleteSuppliesButton>
        </DeleteSuppliesActions>
      </DeleteSuppliesBox>
    </DeleteSuppliesBackground>
  );
};

export default DeleteSupplies;
