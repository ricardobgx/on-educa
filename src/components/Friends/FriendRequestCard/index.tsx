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
import FriendRequestCardActions from '../FriendRequestCardActions';
import { FriendRequestCardBox } from './styles';

interface IFriendRequestCardProps {
  people: IPeople;
  token: string;
}

const FriendRequestCard = (props: IFriendRequestCardProps): JSX.Element => {
  const { people, token } = props;

  const [student, setStudent] = useState(DEFAULT_STUDENT);
  const [teacher, setTeacher] = useState(DEFAULT_TEACHER);
  const [requester, setRequester] = useState(DEFAULT_PEOPLE);

  const getPeopleSucess = (peopleFound: IPeople): void => {
    setRequester(peopleFound);
    setUpPeopleType(
      OnEducaAPI,
      peopleFound.id,
      peopleFound.isStudent,
      token,
      setStudent,
      setTeacher,
    );
  };

  useEffect(() => {
    getPeople(OnEducaAPI, people.id, getPeopleSucess, token);
  }, []);

  return (
    <FriendRequestCardBox>
      <PeopleCard
        people={requester}
        student={student}
        teacher={teacher}
        abbreviateName
        showScore={false}
        smartphoneNameLength={25}
      />
      <FriendRequestCardActions people={people} />
    </FriendRequestCardBox>
  );
};

export default FriendRequestCard;
