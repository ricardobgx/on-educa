import React from 'react';
import {
  DuelChatMessageBox,
  DuelChatMessagePeoplePicture,
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
      className={`with-shadow bd-rd-30 ${
        loggedPeople.id === people.id ? 'my-message' : ''
      }`}
    >
      <DuelChatMessagePeoplePicture src={people.profilePicture.path} />
      <DuelChatMessageContent>{content}</DuelChatMessageContent>
    </DuelChatMessageBox>
  );
};

export default DuelChatMessage;
