import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import { IUnity } from '../../../interfaces/IUnity';
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
      <DeleteContentButton onClick={() => removeSelectedContent(content)}>
        <DeleteContentButtonIcon className="fas fa-times" />
      </DeleteContentButton>
    </NewDuelSelectedContentCardBox>
  );
};

export default NewDuelSelectedContentCard;
