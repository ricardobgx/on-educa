/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import PeopleCard from '../../../App/PeopleCard';
import { RankingPosition, RankingCardBox } from '../styles';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
} from '../../../../static/defaultEntitiesValues';
import { getPeople } from '../../../../functions/people';
import OnEducaAPI from '../../../../services/api';
import { isDefaultPeople } from '../../../../functions/entitiesValues';
import { ActionCreators } from '../../../../store';
import { showErrorMessage } from '../../../../functions/utils';

interface ITeacherRankingCardProps {
  teacherWeeklyPerformance: ITeacherWeeklyPerformance;
  rankingPosition: number;
  token: string;
}

const TeacherRankingCard = (props: ITeacherRankingCardProps): JSX.Element => {
  const { teacherWeeklyPerformance, rankingPosition, token } = props;
  const { teacher } = teacherWeeklyPerformance;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

  const getPeopleAction = async (): Promise<void> => {
    const peopleFound = await getPeople(
      OnEducaAPI,
      teacher.people.id,
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
      className="block-shadow-button secondary-action bd-rd-20"
    >
      <RankingPosition>#{rankingPosition}</RankingPosition>
      <PeopleCard
        smartphoneNameLength={20}
        abbreviateName
        showScore
        people={people}
        student={DEFAULT_STUDENT}
        teacher={teacher}
      />
    </RankingCardBox>
  );
};

export default TeacherRankingCard;
