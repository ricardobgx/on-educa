import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import { DEFAULT_UNITY } from '../../../static/defaultEntitiesValues';
import NewDuelSelectedContentCard from '../NewDuelSelectedContentCard';
import {
  NewDuelSelectedContentsBox,
  NewDuelSelectedContentsList,
} from './styles';

export interface INewDuelSelectedContentsProps {
  selectedContents: IContent[];
  setSelectedContents: (value: IContent[]) => void;
}

const NewDuelSelectedContents = (
  props: INewDuelSelectedContentsProps,
): JSX.Element => {
  const { selectedContents, setSelectedContents } = props;

  const removeSelectedContent = (content: IContent): void => {
    const newSelectedContents = selectedContents.filter(
      (selectedContent) => selectedContent.id !== content.id,
    );
    setSelectedContents([...newSelectedContents]);
  };

  return (
    <NewDuelSelectedContentsBox className="with-shadow bd-rd-5">
      <NewDuelSelectedContentsList>
        {selectedContents.map((selectedContent) => (
          <NewDuelSelectedContentCard
            key={selectedContent.id}
            content={selectedContent}
            unity={selectedContent.unity}
            removeSelectedContent={removeSelectedContent}
          />
        ))}
      </NewDuelSelectedContentsList>
    </NewDuelSelectedContentsBox>
  );
};

export default NewDuelSelectedContents;
