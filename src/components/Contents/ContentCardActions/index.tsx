import React from 'react';
import {
  EditSuppliesLink,
  EditSuppliesButtonIcon,
  DeleteSuppliesButton,
  DeleteSuppliesButtonIcon,
} from '../../App/Supplies/styles';
import { ContentCardActionsBox } from './styles';

interface IContentCardActionsProps {
  content: IContent;
  setContent: (value: IContent) => void;
  setDeleteContentIsVisible: (value: boolean) => void;
}

const ContentCardActions = (props: IContentCardActionsProps): JSX.Element => {
  const { content, setContent, setDeleteContentIsVisible } = props;

  return (
    <ContentCardActionsBox>
      <EditSuppliesLink
        className="block-shadow-button secondary-action bd-rd-10"
        to={`/contents/${content.id}/edit`}
      >
        <EditSuppliesButtonIcon className="fas fa-pen" />
      </EditSuppliesLink>
      <DeleteSuppliesButton
        className="block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          setContent(content);
          setDeleteContentIsVisible(true);
        }}
      >
        <DeleteSuppliesButtonIcon className="fas fa-trash" />
      </DeleteSuppliesButton>
    </ContentCardActionsBox>
  );
};

export default ContentCardActions;
