/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import PeopleCard from '../../../App/PeopleCard';
import { RankingPosition, RankingCardBox } from '../styles';
import {
  DEFAULT_PEOPLE,
  DEFAULT_TEACHER,
} from '../../../../static/defaultEntitiesValues';
import { getPeople } from '../../../../functions/people';
import OnEducaAPI from '../../../../services/api';
import { isDefaultPeople } from '../../../../functions/entitiesValues';
import { ActionCreators } from '../../../../store';
import { showErrorMessage } from '../../../../functions/utils';

interface IStudentRankingCardProps {
  studentWeeklyPerformance: IStudentWeeklyPerformance;
  rankingPosition: number;
  token: string;
}

const StudentRankingCard = (props: IStudentRankingCardProps): JSX.Element => {
  const { studentWeeklyPerformance, rankingPosition, token } = props;
  const { student } = studentWeeklyPerformance;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

  const getPeopleAction = async (): Promise<void> => {
    const peopleFound = await getPeople(
      OnEducaAPI,
      student.people.id,
      token,
      (err: AxiosError): void => {
        showErrorMessage(err, showFloatNotification);
      },
    );

    if (peopleFound) setPeople(peopleFound);
  };

  useEffect(() => {
    if (isDefaultPeople(people)) {
      getPeopleAction();
    }
  }, []);

  return (
    <RankingCardBox
      to={`/profile/${people.id}`}
      className="block-shadow-button secondary-action bd-rd-15"
    >
      <RankingPosition>#{rankingPosition}</RankingPosition>
      <PeopleCard
        smartphoneNameLength={20}
        abbreviateName
        showScore
        people={people}
        student={student}
        teacher={DEFAULT_TEACHER}
      />
    </RankingCardBox>
  );
};

export default StudentRankingCard;
