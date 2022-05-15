import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import NewDuelContentCard from '../NewDuelContentCard';
import { NewDuelSelectedContentCardBox, DeleteContentButton } from './styles';

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
        className="block-shadow-button main-action bd-rd-10"
        onClick={() => removeSelectedContent(content)}
      >
        <SmallMaterialIconOutlined color="" icon="delete" />
      </DeleteContentButton>
    </NewDuelSelectedContentCardBox>
  );
};

export default NewDuelSelectedContentCard;
