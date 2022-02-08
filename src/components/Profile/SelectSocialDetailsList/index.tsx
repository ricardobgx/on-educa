import React from 'react';
import { SocialDetailType } from '../../../pages/Profile';
import SelectSocialDetail from '../Buttons/SelectSocialDetail';
import { SelectSocialDetailsListBox } from './styles';

interface ISelectSocialDetailsListProps {
  socialDetailSelected: number;
  setSocialDetailSelected: (value: number) => void;
}

const SelectSocialDetailsList = (
  props: ISelectSocialDetailsListProps,
): JSX.Element => {
  const { socialDetailSelected, setSocialDetailSelected } = props;

  return (
    <SelectSocialDetailsListBox>
      <SelectSocialDetail
        label="Amigos"
        icon="fas fa-user-friends"
        socialDetail={SocialDetailType.FRIENDS}
        socialDetailSelected={socialDetailSelected}
        setSocialDetailSelected={setSocialDetailSelected}
      />
      <SelectSocialDetail
        label="Revisões"
        icon="fas fa-file-alt"
        socialDetail={SocialDetailType.REVIEWS}
        socialDetailSelected={socialDetailSelected}
        setSocialDetailSelected={setSocialDetailSelected}
      />
      <SelectSocialDetail
        label="Conquistas"
        icon="fas fa-star-half-alt"
        socialDetail={SocialDetailType.ACHIEVEMENTS}
        socialDetailSelected={socialDetailSelected}
        setSocialDetailSelected={setSocialDetailSelected}
      />
      <SelectSocialDetail
        label="Missões"
        icon="fas fa-user-secret"
        socialDetail={SocialDetailType.MISSIONS}
        socialDetailSelected={socialDetailSelected}
        setSocialDetailSelected={setSocialDetailSelected}
      />
    </SelectSocialDetailsListBox>
  );
};

export default SelectSocialDetailsList;
