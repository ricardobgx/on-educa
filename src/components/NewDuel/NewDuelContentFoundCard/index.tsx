/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import NewDuelContentCard, {
  INewDuelContentCardProps,
} from '../NewDuelContentCard';
import {
  AddContentButton,
  AddContentButtonIcon,
  NewDuelContentFoundCardBox,
} from './styles';

interface INewDuelContentFoundCardProps extends INewDuelContentCardProps {
  selectedContents: IContent[];
  setSelectedContents: (value: IContent[]) => void;
  clearContentsFound: () => void;
}

const NewDuelContentFoundCard = (
  props: INewDuelContentFoundCardProps,
): JSX.Element => {
  const { selectedContents, setSelectedContents, content, clearContentsFound } =
    props;

  const addFoundContent = (newContent: IContent): void => {
    setSelectedContents([...selectedContents, newContent]);
    clearContentsFound();
  };

  return (
    <NewDuelContentFoundCardBox>
      <NewDuelContentCard {...props} />
      <AddContentButton
        className="with-shadow bd-rd-5"
        onClick={() => addFoundContent(content)}
      >
        <AddContentButtonIcon className="fas fa-plus" />
      </AddContentButton>
    </NewDuelContentFoundCardBox>
  );
};

export default NewDuelContentFoundCard;
