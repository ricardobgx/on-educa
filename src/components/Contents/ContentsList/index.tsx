/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { ICommonContentProps } from '../../../pages/Contents';
import ContentCard from '../ContentCard';
import { ContentsListBox } from './styles';

interface IContentsListProps extends ICommonContentProps {
  contents: IContent[];
  loadContent: (value: IContent) => void;
  loadPopup: (popup: IPopup) => void;
}

const ContentsList = (props: IContentsListProps): JSX.Element => {
  const { contents, loadContent, getContents, loadPopup } = props;

  return (
    <ContentsListBox className="supplies-list">
      {contents.map((content, index) => (
        <ContentCard
          index={index}
          content={content}
          loadContent={loadContent}
          getContents={getContents}
          loadPopup={loadPopup}
        />
      ))}
    </ContentsListBox>
  );
};

export default ContentsList;
