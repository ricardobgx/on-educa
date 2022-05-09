import React from 'react';
import NewDuelContentCard from '../NewDuelContentCard';
import {
  NewDuelSelectedContentCardBox,
  DeleteContentButton,
  DeleteContentButtonIcon,
} from './styles';

interface INewDuelSelectedContentCardProps {
  content: IContent;
  unity: IUnity;
  removeSelectedContent: (value: IContent) => void;
}

const NewDuelSelectedContentCard = (
  props: INewDuelSelectedContentCardProps,
): JSX.Element => {
  const { content, unity, removeSelectedContent } = props;

  return (
    <NewDuelSelectedContentCardBox>
      <NewDuelContentCard content={content} unity={unity} />
      <DeleteContentButton
        className="with-shadow bd-rd-20"
        onClick={() => removeSelectedContent(content)}
      >
        <DeleteContentButtonIcon className="fas fa-trash" />
      </DeleteContentButton>
    </NewDuelSelectedContentCardBox>
  );
};

export default NewDuelSelectedContentCard;
