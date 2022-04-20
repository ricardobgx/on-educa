import React from 'react';
import { IDuelChatMessage } from '../../../interfaces/IDuelChatMessage';
import { IPeople } from '../../../interfaces/IPeople';
import {
  DuelChatMessageBox,
  DuelChatMessagePeopleName,
  DuelChatMessageContent,
} from './styles';

interface IDuelChatMessageProps {
  loggedPeople: IPeople;
  message: IDuelChatMessage;
}

const DuelChatMessage = (props: IDuelChatMessageProps): JSX.Element => {
  const { message, loggedPeople } = props;
  const { people, content } = message;

  return (
    <DuelChatMessageBox
      className={loggedPeople.id === people.id ? 'my-message' : ''}
    >
      <DuelChatMessagePeopleName>{people.name}</DuelChatMessagePeopleName>
      <DuelChatMessageContent>{content}</DuelChatMessageContent>
    </DuelChatMessageBox>
  );
};

export default DuelChatMessage;
