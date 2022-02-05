import React from 'react';
import { IPeople } from '../../../interfaces/IPeople';
import {
  MyFriendCardActionsBox,
  UnfriendButton,
  UnfriendButtonIcon,
  SendMessageButton,
  SendMessageButtonIcon,
} from './styles';

interface IMyFriendCardActionsProps {
  people: IPeople;
}

const MyFriendCardActions = (props: IMyFriendCardActionsProps): JSX.Element => {
  const { people } = props;

  return (
    <MyFriendCardActionsBox>
      <UnfriendButton>
        <UnfriendButtonIcon className="fas fa-user-times" />
      </UnfriendButton>
      <SendMessageButton to="/">
        <SendMessageButtonIcon className="fas fa-comment-alt" />
      </SendMessageButton>
    </MyFriendCardActionsBox>
  );
};

export default MyFriendCardActions;
