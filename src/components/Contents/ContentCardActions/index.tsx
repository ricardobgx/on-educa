import React from 'react';
import { ICommonContentProps } from '../../../pages/Contents';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import DeleteContent from '../DeleteContent';
import {
  EditContentButton,
  DeleteContentButton,
  ContentCardActionsBox,
} from './styles';

interface IContentCardActionsProps extends ICommonContentProps {
  content: IContent;
  loadPopup: (popup: IPopup) => void;
}

const ContentCardActions = (props: IContentCardActionsProps): JSX.Element => {
  const { content, loadPopup, getContents } = props;

  return (
    <ContentCardActionsBox className="supplies-card-actions">
      <EditContentButton
        className="supplies-card-action-button block-shadow-button secondary-action bd-rd-10"
        to={`/contents/${content.id}/edit`}
      >
        <SmallMaterialIconOutlined color="" icon="edit" />
      </EditContentButton>
      <DeleteContentButton
        className="supplies-card-action-button block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          loadPopup({
            title: 'Excluir conteúdo',
            Children: DeleteContent,
            childrenProps: { content, getContents },
          });
        }}
      >
        <SmallMaterialIconOutlined color="" icon="delete" />
      </DeleteContentButton>
    </ContentCardActionsBox>
  );
};

export default ContentCardActions;
