import React from 'react';
import { ContentPracticeButtonBox, ContentPracticeButtonLabel } from './styles';

interface IContentPracticeButtonProps {
  contentId: string;
}

const ContentPracticeButton = (
  props: IContentPracticeButtonProps,
): JSX.Element => {
  const { contentId } = props;

  return (
    <ContentPracticeButtonBox to={`/contents/${contentId}/practice`}>
      <ContentPracticeButtonLabel>Praticar</ContentPracticeButtonLabel>
    </ContentPracticeButtonBox>
  );
};

export default ContentPracticeButton;
