import React from 'react';
import { SocialDetailType } from '../../../pages/Profile';
import FriendsList from '../FriendsList';
import { SocialDetailBox } from './styles';

interface ISocialDetailProps {
  socialDetailSelected: number;
  people: IPeople;
  loggedPeople: IPeople;
  token: string;
}

const SocialDetail = (props: ISocialDetailProps): JSX.Element => {
  const { socialDetailSelected, people, loggedPeople, token } = props;

  return (
    <SocialDetailBox>
      {socialDetailSelected === SocialDetailType.FRIENDS && (
        <FriendsList
          loggedPeople={loggedPeople}
          friends={people.friends}
          token={token}
        />
      )}
    </SocialDetailBox>
  );
};

export default SocialDetail;
