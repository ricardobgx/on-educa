import React from 'react';
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

  return (
    <SectionLabelBox>
      {backLink !== '' ? (
        <SectionLabelBackLink to={backLink}>
          <SectionLabelBackLinkIcon className="fas fa-arrow-left" />
        </SectionLabelBackLink>
      ) : null}
      <SectionLabelText>{label}</SectionLabelText>
    </SectionLabelBox>
  );
};

export default SectionLabel;
