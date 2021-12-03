/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import ContentCard from '../ContentCard';
import { ContentsListBox, ContentCards } from './styles';

interface IContentsListProps {
  contents: IContent[];
}

const ContentsList = (props: IContentsListProps): JSX.Element => {
  const { contents } = props;

  return (
    <ContentsListBox>
      <ContentCards>
        {contents.map((content) => (
          <ContentCard {...content} />
        ))}
      </ContentCards>
    </ContentsListBox>
  );
};

export default ContentsList;
