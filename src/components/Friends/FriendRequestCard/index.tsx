/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { getPeople, setUpPeopleType } from '../../../functions/people';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import PeopleCard from '../../App/PeopleCard';
import FriendRequestCardActions from '../FriendRequestCardActions';
import { FriendRequestCardBox, FriendRequestCardPeople } from './styles';

interface IFriendRequestCardProps {
  friendRequest: IFriendRequest;
  getPeopleFriendRequests: () => void;
  token: string;
}

const FriendRequestCard = (props: IFriendRequestCardProps): JSX.Element => {
  const { friendRequest, getPeopleFriendRequests, token } = props;
  const { requester } = friendRequest;

  const [people, setPeople] = useState(DEFAULT_PEOPLE);
  const [student, setStudent] = useState(DEFAULT_STUDENT);
  const [teacher, setTeacher] = useState(DEFAULT_TEACHER);

  const getPeopleData = async (): Promise<void> => {
    const peopleFound = await getPeople(OnEducaAPI, requester.id, token) || DEFAULT_PEOPLE;
    setPeople(peopleFound);
    setUpPeopleType(
      OnEducaAPI,
      peopleFound.id,
      peopleFound.isStudent,
      token,
      setStudent,
      setTeacher,
    );
  }

  useEffect(() => {
    getPeopleData();
  }, []);

  return (
    <FriendRequestCardBox>
      <FriendRequestCardPeople to={`/profile/${people.id}`} className="with-shadow bd-rd-20">
        <PeopleCard
          people={people}
          student={student}
          teacher={teacher}
          abbreviateName
          showScore={false}
          smartphoneNameLength={25}
        />
      </FriendRequestCardPeople>
      <FriendRequestCardActions
        friendRequest={friendRequest}
        getPeopleFriendRequests={getPeopleFriendRequests}
        token={token}
      />
    </FriendRequestCardBox>
  );
};

export default FriendRequestCard;
