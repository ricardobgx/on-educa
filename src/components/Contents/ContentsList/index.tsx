/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import { ICommonContentProps } from '../../../pages/Contents';
import ContentCard from '../ContentCard';
import { ContentsListBox, ContentCards } from './styles';

interface IContentsListProps extends ICommonContentProps {
  contents: IContent[];
  setContent: (value: IContent) => void;
  setDeleteContentIsVisible: (value: boolean) => void;
}

const ContentsList = (props: IContentsListProps): JSX.Element => {
  const { contents, setContent, setDeleteContentIsVisible } = props;

  return (
    <ContentsListBox>
      <ContentCards>
        {contents.map((content, index) => (
          <ContentCard
            index={index}
            content={content}
            setContent={setContent}
            setDeleteContentIsVisible={setDeleteContentIsVisible}
          />
        ))}
      </ContentCards>
    </ContentsListBox>
  );
};

export default ContentsList;
