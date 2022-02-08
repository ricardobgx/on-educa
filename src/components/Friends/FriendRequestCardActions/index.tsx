import React from 'react';
import { IPeople } from '../../../interfaces/IPeople';
import {
  FriendRequesCardActionsBox,
  RejectRequest,
  RejectRequestIcon,
  AcceptRequest,
  AcceptRequestIcon,
} from './styles';

interface IFriendRequesCardActionsProps {
  people: IPeople;
}

const FriendRequesCardActions = (
  props: IFriendRequesCardActionsProps,
): JSX.Element => {
  const { people } = props;

  return (
    <FriendRequesCardActionsBox>
      <AcceptRequest>
        <AcceptRequestIcon className="fas fa-check" />
      </AcceptRequest>
      <RejectRequest>
        <RejectRequestIcon className="fas fa-times" />
      </RejectRequest>
    </FriendRequesCardActionsBox>
  );
};

export default FriendRequesCardActions;
