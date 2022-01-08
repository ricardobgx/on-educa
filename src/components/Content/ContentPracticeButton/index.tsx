import React from 'react';
import { ContentPracticeButtonBox, ContentPracticeButtonLabel } from './styles';

const ContentPracticeButton = (): JSX.Element => {
  return (
    <ContentPracticeButtonBox to="/contents/12345/practice">
      <ContentPracticeButtonLabel>Praticar</ContentPracticeButtonLabel>
    </ContentPracticeButtonBox>
  );
};

export default ContentPracticeButton;
