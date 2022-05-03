/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getOrCreateChat } from '../../../functions/chat';
import {
  getPeople,
  isPeopleFriend,
  isPeopleLogged,
  setUpPeopleType,
} from '../../../functions/people';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import { ActionCreators } from '../../../store';
import PeopleCard from '../../App/PeopleCard';
import {
  FriendCardBox,
  FriendPeople,
  SendMessageButton,
  SendMessageButtonIcon,
} from './styles';

interface IFriendCardProps {
  people: IPeople;
  loggedPeople: IPeople;
  token: string;
  index: number;
}

const FriendCard = (props: IFriendCardProps): JSX.Element => {
  const { loggedPeople, people, token, index } = props;

  const location = useHistory();

  const dispatch = useDispatch();

  const { loadChat } = bindActionCreators(ActionCreators, dispatch);

  const [friend, setFriend] = useState(DEFAULT_PEOPLE);
  const [student, setStudent] = useState(DEFAULT_STUDENT);
  const [teacher, setTeacher] = useState(DEFAULT_TEACHER);
  const [isFriend, setIsFriend] = useState(false);

  const getPeopleSucess = (peopleFound: IPeople): void => {
    setUpPeopleType(
      OnEducaAPI,
      peopleFound.id,
      peopleFound.isStudent,
      token,
      setStudent,
      setTeacher,
    );

    setFriend(peopleFound);
  };

  const redirectToChats = (chat: IChat): void => {
    loadChat(chat);
    location.push('/chats');
  };

  const getOrCreateChatData = (): void => {
    getOrCreateChat(
      OnEducaAPI,
      { chatCreatorId: loggedPeople.id, chatParticipantId: friend.id },
      token,
      redirectToChats,
    );
  };

  const getFriendPeople = async (): Promise<void> => {
    const peopleFound = await getPeople(OnEducaAPI, people.id, token);
    if (peopleFound) getPeopleSucess(peopleFound);
  };

  useEffect(() => {
    getFriendPeople();
    if (!isPeopleLogged(loggedPeople.id, people.id))
      setIsFriend(isPeopleFriend(loggedPeople.friends, people.id));
  }, [token, people, loggedPeople]);

  return (
    <FriendCardBox style={{ animationDelay: `${index * 0.2}s` }}>
      <FriendPeople
        className="with-shadow bd-rd-20"
        to={`/profile/${people.id}`}
      >
        <PeopleCard
          people={friend}
          student={student}
          teacher={teacher}
          abbreviateName
          showScore={false}
          smartphoneNameLength={25}
        />
      </FriendPeople>
      {isFriend && (
        <SendMessageButton
          className="block-shadow-button main-action bd-rd-10"
          onClick={() => getOrCreateChatData()}
        >
          <SendMessageButtonIcon className="fas fa-comment-alt" />
        </SendMessageButton>
      )}
    </FriendCardBox>
  );
};

export default FriendCard;
