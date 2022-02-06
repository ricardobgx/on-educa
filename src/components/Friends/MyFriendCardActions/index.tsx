import React from 'react';
import { removePeopleFriend } from '../../../functions/people';
import { IPeople } from '../../../interfaces/IPeople';
import OnEducaAPI from '../../../services/api';
import {
  MyFriendCardActionsBox,
  UnfriendButton,
  UnfriendButtonIcon,
  SendMessageButton,
  SendMessageButtonIcon,
} from './styles';

interface IMyFriendCardActionsProps {
  people: IPeople;
  loggedPeople: IPeople;
  token: string;
}

const MyFriendCardActions = (props: IMyFriendCardActionsProps): JSX.Element => {
  const { people, loggedPeople, token } = props;

  return (
    <MyFriendCardActionsBox>
      <UnfriendButton
        onClick={() =>
          removePeopleFriend(
            OnEducaAPI,
            loggedPeople.id,
            {
              friendId: people.id,
            },
            token,
            () => console.log('amigo removido'),
            () => console.log('erro'),
          )
        }
      >
        <UnfriendButtonIcon className="fas fa-user-times" />
      </UnfriendButton>
      <SendMessageButton to="/">
        <SendMessageButtonIcon className="fas fa-comment-alt" />
      </SendMessageButton>
    </MyFriendCardActionsBox>
  );
};

export default MyFriendCardActions;
