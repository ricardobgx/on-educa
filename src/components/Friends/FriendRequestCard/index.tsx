/* eslint-disable */

import React, { useEffect, useState } from 'react';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import PeopleCard from '../../App/PeopleCard';
import FriendRequestCardActions from '../FriendRequestCardActions';
import { FriendRequestCardBox } from './styles';

interface IFriendRequestCardProps {
  friendRequest: IFriendRequest;
  getPeopleFriendRequests: () => void;
  token: string;
}

const FriendRequestCard = (props: IFriendRequestCardProps): JSX.Element => {
  const { friendRequest, getPeopleFriendRequests, token } = props;
  // const { requester } = friendRequest;

  const [people, setPeople] = useState(DEFAULT_PEOPLE);
  const [student, setStudent] = useState(DEFAULT_STUDENT);
  const [teacher, setTeacher] = useState(DEFAULT_TEACHER);

  // const getPeopleSucess = (peopleFound: IPeople): void => {
  //   setPeople(peopleFound);
  //   setUpPeopleType(
  //     OnEducaAPI,
  //     peopleFound.id,
  //     peopleFound.isStudent,
  //     token,
  //     setStudent,
  //     setTeacher,
  //   );
  // };

  useEffect(() => {
    // getPeople(OnEducaAPI, requester.id, getPeopleSucess, token);
  }, []);

  return (
    <FriendRequestCardBox>
      <PeopleCard
        people={people}
        student={student}
        teacher={teacher}
        abbreviateName
        showScore={false}
        smartphoneNameLength={25}
      />
      <FriendRequestCardActions
        friendRequest={friendRequest}
        getPeopleFriendRequests={getPeopleFriendRequests}
        token={token}
      />
    </FriendRequestCardBox>
  );
};

export default FriendRequestCard;
