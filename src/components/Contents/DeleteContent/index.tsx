import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteContent as deleteContentData } from '../../../functions/content';
import { ICommonContentProps } from '../../../pages/Contents';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
import {
  ContentPopupBox,
  ContentPopupButton,
  ContentPopupButtonLabel,
  ContentPopupActions,
  ContentPopupLabel,
} from '../styles';

interface IContentPopupProps extends ICommonContentProps {
  content: IContent;
}

const ContentPopup = (props: IContentPopupProps): JSX.Element => {
  /* Props */

  const { content, getContents } = props;

  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification, closePopup } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const deleteSucess = (): void => {
    getContents();
    closePopup();
  };

  const deleteError = (): void => {
    showFloatNotification('Ocorreu um erro');
  };

  const deleteContent = async (): Promise<void> => {
    deleteContentData(OnEducaAPI, content.id, token, deleteSucess, deleteError);
  };

  return (
    <ContentPopupBox>
      <ContentPopupLabel>
        Tem certeza que deseja excluir o conteúdo {content.name}? Todos as
        questões e informações associadas à esse conteúdo serão excluidas
      </ContentPopupLabel>
      <ContentPopupActions>
        <ContentPopupButton
          className="block-shadow-button secondary-action bd-rd-20"
          onClick={() => closePopup()}
        >
          <ContentPopupButtonLabel>Cancelar</ContentPopupButtonLabel>
        </ContentPopupButton>
        <ContentPopupButton
          className="block-shadow-button main-action bd-rd-20"
          onClick={() => deleteContent()}
        >
          <ContentPopupButtonLabel>Excluir</ContentPopupButtonLabel>
        </ContentPopupButton>
      </ContentPopupActions>
    </ContentPopupBox>
  );
};

export default ContentPopup;
