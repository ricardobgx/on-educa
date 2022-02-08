import React from 'react';
import {
  SelectSocialDetailBox,
  SelectSocialDetailIcon,
  SelectSocialDetailLabel,
} from './styles';

interface ISelectSocialDetailProps {
  label: string;
  icon: string;
  socialDetail: number;
  socialDetailSelected: number;
  setSocialDetailSelected: (value: number) => void;
}

const SelectSocialDetail = (props: ISelectSocialDetailProps): JSX.Element => {
  const {
    label,
    icon,
    socialDetail,
    socialDetailSelected,
    setSocialDetailSelected,
  } = props;

  return (
    <SelectSocialDetailBox
      onClick={() => setSocialDetailSelected(socialDetail)}
      className={socialDetailSelected === socialDetail ? 'selected-detail' : ''}
    >
      <SelectSocialDetailIcon className={icon} />
      <SelectSocialDetailLabel>{label}</SelectSocialDetailLabel>
    </SelectSocialDetailBox>
  );
};

export default SelectSocialDetail;
