/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { ICommonContentProps } from '../../../pages/Contents';
import ContentCard from '../ContentCard';
import { ContentsListBox } from './styles';

interface IContentsListProps extends ICommonContentProps {
  contents: IContent[];
  setContent: (value: IContent) => void;
  setDeleteContentIsVisible: (value: boolean) => void;
}

const ContentsList = (props: IContentsListProps): JSX.Element => {
  const { contents, setContent, setDeleteContentIsVisible } = props;

  return (
    <ContentsListBox className="supplies-list">
      {contents.map((content, index) => (
        <ContentCard
          index={index}
          content={content}
          setContent={setContent}
          setDeleteContentIsVisible={setDeleteContentIsVisible}
        />
      ))}
    </ContentsListBox>
  );
};

export default ContentsList;
