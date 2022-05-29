import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { getPeople } from '../../../../functions/people';
import OnEducaAPI from '../../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../../static/defaultEntitiesValues';
import { handleLeagueColors } from '../../../../utils/league';
import PeopleCard from '../../../App/PeopleCard';
import { LeaguesPeopleRankingCardBox } from './styles';

const LeaguesPeopleRankingCard: React.FC<ILeaguesPeopleRankingCardProps> = (
  props,
) => {
  const { people: peopleProps, token } = props;

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

  const getPeopleAction = async (): Promise<void> => {
    const peopleFound = await getPeople(
      OnEducaAPI,
      peopleProps.id,
      token,
      (err: AxiosError) => console.log(err.message),
    );

    if (peopleFound) setPeople(peopleFound);
  };

  useEffect(() => {
    getPeopleAction();
  }, []);

  const leagueColors = handleLeagueColors(7);
  const { backgroundColors, borderColor } = leagueColors;

  return (
    <LeaguesPeopleRankingCardBox
      className="block-shadow-button secondary-action bd-rd-15"
      backgroundColors={backgroundColors}
      borderColor={borderColor}
      to={`profile/${people.id}`}
    >
      <PeopleCard
        people={people}
        student={DEFAULT_STUDENT}
        teacher={DEFAULT_TEACHER}
        abbreviateName
        showScore
        smartphoneNameLength={30}
      />
    </LeaguesPeopleRankingCardBox>
  );
};

export default LeaguesPeopleRankingCard;
