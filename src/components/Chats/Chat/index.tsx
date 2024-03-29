/* eslint-disable react-hooks/exhaustive-deps */

import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { socket } from '../../../App';
import { createMessage } from '../../../functions/message';
import { getPeople } from '../../../functions/people';
import { randInt, showErrorMessage } from '../../../functions/utils';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_PEOPLE } from '../../../static/defaultEntitiesValues';
import { ActionCreators } from '../../../store';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import ChatMessage from '../ChatMessage';
import ChatPeoplePicture from '../ChatPeoplePicture';
import {
  ChatBox,
  ChatParticipant,
  ChatPeopleName,
  ChatPeopleOnlineLabel,
  ChatMessages,
  ChatMessagesBox,
  ChatMessagesList,
  ChatMessageInput,
  MessageInput,
  SendMessageButton,
  ChatPeopleNameAndOnlineLabel,
} from './styles';

interface IChatProps {
  chat: IChat;
  loggedPeople: IPeople;
  setSelectedChat: (value: IChat) => void;
  token: string;
}

const Chat = (props: IChatProps): JSX.Element => {
  const { chat, loggedPeople, setSelectedChat, token } = props;
  const { id, chatCreator, chatParticipant } = chat;

  const dispatch = useDispatch();

  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [lastElementTop, setLastElementTop] = useState(0);

  const [message, setMessage] = useState('');
  const messagesList = document.getElementById('messages-list');

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

  const { name, profilePicture, isOnline } = people;

  const addMessage = (newMessage: IMessage): void => {
    const { chat: messageChat } = newMessage;

    if (messageChat.id === id) {
      setSelectedChat({
        ...chat,
        messages: [...chat.messages, newMessage],
      });
    }
  };

  const emitMessage = (msg: IMessage): void => {
    socket.emit('chat.message', msg);
  };

  const sendMessage = (): void => {
    if (message.trim()) {
      createMessage(
        OnEducaAPI,
        {
          id: randInt(0, 2500).toString(),
          chatId: chat.id,
          content: message,
          senderId: loggedPeople.id,
        },
        token,
        emitMessage,
      );
      setMessage('');
    }
  };

  const getChatPeople = async (peopleId: string): Promise<void> => {
    const chatPeople = await getPeople(
      OnEducaAPI,
      peopleId,
      token,
      (err: AxiosError): void => {
        showErrorMessage(err, showFloatNotification);
      },
    );
    if (chatPeople) setPeople(chatPeople);
  };

  useEffect(() => {
    if (token) {
      const peopleId =
        loggedPeople.id === chatCreator.id
          ? chatParticipant.id
          : chatCreator.id;
      getChatPeople(peopleId);
    }

    if (messagesList) {
      messagesList.scrollTop = lastElementTop;
    }
    socket.on('chat.message', addMessage);
    return () => {
      socket.off('chat.message', addMessage);
    };
  }, [chat, lastElementTop, token]);

  const messages = chat.messages.sort(
    (messageA: IMessage, messageB: IMessage) => {
      if (messageA.createdAt.toString() > messageB.createdAt.toString()) {
        return 1;
      }
      if (messageB.createdAt.toString() > messageA.createdAt.toString()) {
        return -1;
      }
      return 0;
    },
  );

  return (
    <ChatBox>
      <ChatParticipant>
        <ChatPeoplePicture
          profilePicturePath={profilePicture.path}
          isOnline={isOnline}
        />
        <ChatPeopleNameAndOnlineLabel>
          <ChatPeopleName>{name}</ChatPeopleName>
          <ChatPeopleOnlineLabel>
            {isOnline ? 'online' : 'offline'}
          </ChatPeopleOnlineLabel>
        </ChatPeopleNameAndOnlineLabel>
      </ChatParticipant>
      <ChatMessages>
        <ChatMessagesBox>
          <ChatMessagesList id="messages-list">
            {/* <ChatMessagesListBox id="messages-list-box"> */}
            {messages.map((msg, index) => (
              <ChatMessage
                key={msg.id}
                loggedPeople={loggedPeople}
                message={msg}
                messagesLength={messages.length}
                index={index}
                setLastElementTop={setLastElementTop}
              />
            ))}
            {/* </ChatMessagesListBox> */}
          </ChatMessagesList>
        </ChatMessagesBox>
      </ChatMessages>
      <ChatMessageInput>
        <MessageInput
          type="text"
          placeholder="Digite algo"
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
          onKeyUp={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              sendMessage();
            }
          }}
          className="bd-rd-20"
        />
        <SendMessageButton
          className="block-shadow-button main-action bd-rd-20"
          onClick={() => sendMessage()}
        >
          <SmallMaterialIconOutlined icon="send" color="" />
        </SendMessageButton>
      </ChatMessageInput>
    </ChatBox>
  );
};

export default Chat;
