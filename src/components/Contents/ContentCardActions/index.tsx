import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  EditContentButton,
  DeleteContentButton,
  ContentCardActionsBox,
} from './styles';

interface IContentCardActionsProps {
  content: IContent;
  setContent: (value: IContent) => void;
  setDeleteContentIsVisible: (value: boolean) => void;
}

const ContentCardActions = (props: IContentCardActionsProps): JSX.Element => {
  const { content, setContent, setDeleteContentIsVisible } = props;

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
          setContent(content);
          setDeleteContentIsVisible(true);
        }}
      >
        <SmallMaterialIconOutlined color="" icon="delete" />
      </DeleteContentButton>
    </ContentCardActionsBox>
  );
};

export default ContentCardActions;
