import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import {
  ContentCardActionsBox,
  EditContentButton,
  EditContentButtonIcon,
  DeleteContentButton,
  DeleteContentButtonIcon,
} from './styles';

interface IContentCardActionsProps {
  content: IContent;
  setContent: (value: IContent) => void;
  setDeleteContentIsVisible: (value: boolean) => void;
}

const ContentCardActions = (props: IContentCardActionsProps): JSX.Element => {
  const { content, setContent, setDeleteContentIsVisible } = props;

  return (
    <ContentCardActionsBox>
      <EditContentButton to={`/contents/${content.id}/edit`}>
        <EditContentButtonIcon className="fas fa-pen" />
      </EditContentButton>
      <DeleteContentButton
        onClick={() => {
          setContent(content);
          setDeleteContentIsVisible(true);
        }}
      >
        <DeleteContentButtonIcon className="fas fa-trash" />
      </DeleteContentButton>
    </ContentCardActionsBox>
  );
};

export default ContentCardActions;
