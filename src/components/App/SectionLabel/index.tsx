import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  SectionLabelBackLink,
  SectionLabelBackLinkIcon,
  SectionLabelBox,
  SectionLabelText,
} from './styles';

interface ISectionLabelProps {
  label: string;
  backLink: string;
}

const SectionLabel = (props: ISectionLabelProps): JSX.Element => {
  const { label, backLink } = props;

  const pageHistory = useHistory();

  return (
    <SectionLabelBox>
      {backLink !== '' ? (
        <SectionLabelBackLink onClick={() => pageHistory.push(backLink)}>
          <SectionLabelBackLinkIcon className="fas fa-arrow-left" />
        </SectionLabelBackLink>
      ) : null}
      <SectionLabelText>{label}</SectionLabelText>
    </SectionLabelBox>
  );
};

export default SectionLabel;
