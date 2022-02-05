import React, { useEffect, useState } from 'react';
import { setUpPeopleType } from '../../../functions/people';
import { IPeople } from '../../../interfaces/IPeople';
import OnEducaAPI from '../../../services/api';
import {
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

  useEffect(() => {
    setUpPeopleType(
      OnEducaAPI,
      people.id,
      people.isStudent,
      token,
      setStudent,
      setTeacher,
    );
  }, [token]);

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
      <FriendRequestCardActions people={people} />
    </FriendRequestCardBox>
  );
};

export default FriendRequestCard;
