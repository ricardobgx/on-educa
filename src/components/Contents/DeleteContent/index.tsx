import React from 'react';
import { useSelector } from 'react-redux';
import { deleteContent as deleteContentData } from '../../../functions/content';
import { ICommonContentProps } from '../../../pages/Contents';
import OnEducaAPI from '../../../services/api';
import { RootState } from '../../../store';
import {
  DeleteContentBackground,
  DeleteContentBox,
  CloseDeleteContentButton,
  CloseDeleteContentIcon,
  DeleteContentLabel,
  DeleteContentWarningLabel,
  DeleteContentButton,
  DeleteContentButtonLabel,
  CancelDeleteContentButton,
  CancelDeleteContentButtonLabel,
  DeleteContentActions,
} from './styles';

interface IDeleteContentProps extends ICommonContentProps {
  content: IContent;
  setDeleteContentIsVisible: (value: boolean) => void;
}

const DeleteContent = (props: IDeleteContentProps): JSX.Element => {
  /* Props */

  const { content, setDeleteContentIsVisible, getContents } = props;

  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const deleteSucess = (): void => {
    getContents();
    setDeleteContentIsVisible(false);
  };

  const deleteContent = async (): Promise<void> => {
    deleteContentData(OnEducaAPI, content.id, token, deleteSucess);
  };

  return (
    <DeleteContentBackground>
      <DeleteContentBox>
        <CloseDeleteContentButton
          onClick={() => setDeleteContentIsVisible(false)}
        >
          <CloseDeleteContentIcon className="fas fa-times" />
        </CloseDeleteContentButton>
        <DeleteContentLabel>Excluir unidade</DeleteContentLabel>
        <DeleteContentWarningLabel>
          Tem certeza que deseja excluir o conteúdo {content.name}? Todos as
          questões e informações associadas à esse conteúdo serão excluidas
        </DeleteContentWarningLabel>
        <DeleteContentActions>
          <CancelDeleteContentButton
            onClick={() => setDeleteContentIsVisible(false)}
          >
            <CancelDeleteContentButtonLabel>
              Cancelar
            </CancelDeleteContentButtonLabel>
          </CancelDeleteContentButton>
          <DeleteContentButton onClick={() => deleteContent()}>
            <DeleteContentButtonLabel>Excluir</DeleteContentButtonLabel>
          </DeleteContentButton>
        </DeleteContentActions>
      </DeleteContentBox>
    </DeleteContentBackground>
  );
};

export default DeleteContent;
