import React, { useEffect, useState } from 'react';
import { getPeople, setUpPeopleType } from '../../../functions/people';
import { IPeople } from '../../../interfaces/IPeople';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import PeopleCard from '../../App/PeopleCard';
import MyFriendCardActions from '../MyFriendCardActions';
import { MyFriendCardBox } from './styles';

interface IMyFriendCardProps {
  loggedPeople: IPeople;
  people: IPeople;
  token: string;
}

const MyFriendCard = (props: IMyFriendCardProps): JSX.Element => {
  const { loggedPeople, people, token } = props;

  const [friend, setFriend] = useState(DEFAULT_PEOPLE);
  const [student, setStudent] = useState(DEFAULT_STUDENT);
  const [teacher, setTeacher] = useState(DEFAULT_TEACHER);

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
  }, [token]);

  return (
    <MyFriendCardBox>
      <PeopleCard
        people={friend}
        student={student}
        teacher={teacher}
        abbreviateName
        showScore={false}
        smartphoneNameLength={25}
      />
      <MyFriendCardActions
        people={people}
        loggedPeople={loggedPeople}
        token={token}
      />
    </MyFriendCardBox>
  );
};

export default MyFriendCard;
