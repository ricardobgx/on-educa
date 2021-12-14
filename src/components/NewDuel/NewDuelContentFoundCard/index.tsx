/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IContent } from '../../../interfaces/IContent';
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
}

const NewDuelContentFoundCard = (
  props: INewDuelContentFoundCardProps,
): JSX.Element => {
  const { selectedContents, setSelectedContents, content } = props;

  const addFoundContent = (newContent: IContent): void => {
    setSelectedContents([...selectedContents, newContent]);
  };

  return (
    <NewDuelContentFoundCardBox>
      <NewDuelContentCard {...props} />
      <AddContentButton onClick={() => addFoundContent(content)}>
        <AddContentButtonIcon className="fas fa-plus" />
      </AddContentButton>
    </NewDuelContentFoundCardBox>
  );
};

export default NewDuelContentFoundCard;