import React, { useEffect, useState } from 'react';
import {
  getPeople,
  isPeopleFriend,
  isPeopleLogged,
  setUpPeopleType,
} from '../../../functions/people';
import { IPeople } from '../../../interfaces/IPeople';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import PeopleCard from '../../App/PeopleCard';
import FriendCardActions from '../FriendCardActions';
import { FriendCardBox, FriendPeople } from './styles';

interface IFriendCardProps {
  people: IPeople;
  loggedPeople: IPeople;
  token: string;
}

const FriendCard = (props: IFriendCardProps): JSX.Element => {
  const { loggedPeople, people, token } = props;

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

  useEffect(() => {
    getPeople(OnEducaAPI, people.id, getPeopleSucess, token);
    if (!isPeopleLogged(loggedPeople.id, people.id))
      setIsFriend(isPeopleFriend(loggedPeople.friends, people.id));
  }, [token]);

  console.log(loggedPeople);
  console.log(friend);

  return (
    <FriendCardBox>
      <FriendPeople to={`/profile/${people.id}`}>
        <PeopleCard
          people={friend}
          student={student}
          teacher={teacher}
          abbreviateName
          showScore={false}
          smartphoneNameLength={25}
        />
      </FriendPeople>
      {!isPeopleLogged(loggedPeople.id, friend.id) && (
        <FriendCardActions
          people={friend}
          loggedPeople={loggedPeople}
          token={token}
          isFriend={isFriend}
          setIsFriend={setIsFriend}
        />
      )}
    </FriendCardBox>
  );
};

export default FriendCard;
