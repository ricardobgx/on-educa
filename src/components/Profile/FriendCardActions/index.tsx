import React from 'react';
import { addPeopleFriend, removePeopleFriend } from '../../../functions/people';
import { IPeople } from '../../../interfaces/IPeople';
import OnEducaAPI from '../../../services/api';
import {
  FriendCardActionsBox,
  UnfriendButton,
  UnfriendButtonIcon,
  SendMessageButton,
  SendMessageButtonIcon,
  AddFriendButton,
  AddFriendButtonIcon,
} from './styles';

interface IFriendCardActionsProps {
  people: IPeople;
  loggedPeople: IPeople;
  token: string;
  isFriend: boolean;
  setIsFriend: (value: boolean) => void;
}

const FriendCardActions = (props: IFriendCardActionsProps): JSX.Element => {
  const { people, loggedPeople, token, isFriend, setIsFriend } = props;

  return (
    <FriendCardActionsBox>
      {isFriend ? (
        <>
          <UnfriendButton
            onClick={() =>
              removePeopleFriend(
                OnEducaAPI,
                loggedPeople.id,
                {
                  friendId: people.id,
                },
                token,
                () => setIsFriend(false),
                () => console.log('erro'),
              )
            }
          >
            <UnfriendButtonIcon className="fas fa-user-times" />
          </UnfriendButton>
          <SendMessageButton to="/">
            <SendMessageButtonIcon className="fas fa-comment-alt" />
          </SendMessageButton>
        </>
      ) : (
        <AddFriendButton
          onClick={() =>
            addPeopleFriend(
              OnEducaAPI,
              loggedPeople.id,
              {
                friendId: people.id,
              },
              token,
              () => setIsFriend(true),
              () => console.log('erro'),
            )
          }
        >
          <AddFriendButtonIcon className="fas fa-user-plus" />
        </AddFriendButton>
      )}
    </FriendCardActionsBox>
  );
};

export default FriendCardActions;
