import React from 'react';
import { useSelector } from 'react-redux';
import { deleteContent as deleteContentData } from '../../../functions/content';
import { IContent } from '../../../interfaces/IContent';
import { ICommonContentProps } from '../../../pages/Contents';
import OnEducaAPI from '../../../services/api';
import { State } from '../../../store';
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

  /* Global State */

  const { aplication } = useSelector((store: State) => store);

  const { token } = aplication;

  const deleteSucess = (): void => {
    getContents();
    setDeleteContentIsVisible(false);
  };

  const deleteError = (): void => {
    console.log('erro');
  };

  const deleteContent = async (): Promise<void> => {
    deleteContentData(OnEducaAPI, content.id, token, deleteSucess, deleteError);
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
          Tem certeza que deseja excluir o conteúdo {content.title}? Todos as
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
