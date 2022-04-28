import React from 'react';
import { SocialDetailType } from '../../../pages/Profile';
import SelectSocialDetail from '../Buttons/SelectSocialDetail';
import { SelectSocialDetailsListBox } from './styles';

interface ISelectSocialDetailsListProps {
  people: IPeople;
  socialDetailSelected: number;
  setSocialDetailSelected: (value: number) => void;
}

const SelectSocialDetailsList = (
  props: ISelectSocialDetailsListProps,
): JSX.Element => {
  const { people, socialDetailSelected, setSocialDetailSelected } = props;

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
    </SelectSocialDetailsListBox>
  );
};

export default SelectSocialDetailsList;
