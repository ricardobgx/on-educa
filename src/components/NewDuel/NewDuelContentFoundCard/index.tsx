/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import NewDuelContentCard, {
  INewDuelContentCardProps,
} from '../NewDuelContentCard';
import { AddContentButton, NewDuelContentFoundCardBox } from './styles';

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
        className="block-shadow-button main-action bd-rd-10"
        onClick={() => addFoundContent(content)}
      >
        <SmallMaterialIconOutlined color="" icon="add" />
      </AddContentButton>
    </NewDuelContentFoundCardBox>
  );
};

export default NewDuelContentFoundCard;
