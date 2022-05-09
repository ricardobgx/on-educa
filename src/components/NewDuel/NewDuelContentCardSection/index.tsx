import React from 'react';
import {
  ContentCardIcon,
  ContentCardName,
  NewDuelContentCardSectionBox,
} from './styles';

interface INewDuelContentCardSectionProps {
  label: string;
  bold: boolean;
  preMessage: string;
}

const NewDuelContentCardSection = (
  props: INewDuelContentCardSectionProps,
): JSX.Element => {
  const { label, bold, preMessage } = props;

  return (
    <NewDuelContentCardSectionBox>
      <ContentCardIcon className="fas fa-book" />
      <ContentCardName style={{ fontWeight: bold ? 'bold' : 'unset' }}>
        {preMessage} {label}
      </ContentCardName>
    </NewDuelContentCardSectionBox>
  );
};

export default NewDuelContentCardSection;
