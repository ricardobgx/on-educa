import React from 'react';
import {
  SignPageHeaderBox,
  SignPageHeaderBackButton,
  SignPageHeaderBackButtonIcon,
  SignPageHeaderLabel,
} from './styles';

const SignPageHeader: React.FC<ISignPageHeaderProps> = (props) => {
  const { title, canBack, backLink } = props;

  return (
    <SignPageHeaderBox>
      {canBack && (
        <SignPageHeaderBackButton to={backLink}>
          <SignPageHeaderBackButtonIcon className="fas fa-arrow-left" />
        </SignPageHeaderBackButton>
      )}
      <SignPageHeaderLabel>{title}</SignPageHeaderLabel>
    </SignPageHeaderBox>
  );
};

export default SignPageHeader;
