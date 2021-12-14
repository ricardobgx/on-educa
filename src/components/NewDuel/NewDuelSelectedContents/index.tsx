import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import { DEFAULT_UNITY } from '../../../store/reducers/unity';
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
    <NewDuelSelectedContentsBox>
      <NewDuelSelectedContentsList>
        {selectedContents.map((selectedContent) => (
          <NewDuelSelectedContentCard
            key={selectedContent.id}
            content={selectedContent}
            unity={DEFAULT_UNITY}
            removeSelectedContent={removeSelectedContent}
          />
        ))}
      </NewDuelSelectedContentsList>
    </NewDuelSelectedContentsBox>
  );
};

export default NewDuelSelectedContents;
