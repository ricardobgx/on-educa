import React from 'react';
import ContentDoubt from '../ContentDoubt';
import { DoubtsBox, DoubtsList } from './styles';

const ContentDoubts = (): JSX.Element => {
  return (
    <DoubtsBox>
      <DoubtsList>
        <ContentDoubt />
        <ContentDoubt />
        <ContentDoubt />
        <ContentDoubt />
        <ContentDoubt />
      </DoubtsList>
    </DoubtsBox>
  );
};

export default ContentDoubts;
