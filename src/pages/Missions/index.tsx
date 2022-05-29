/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import MissionCard from '../../components/Missions/MissionCard';
import { getMissions } from '../../functions/mission';
import { Page } from '../../global/styles/components/pageComponents';
import OnEducaAPI from '../../services/api';
import { RootState } from '../../store';
import { PageBox, MissionsList, MissionsListBox } from './styles';

const Missions = (): JSX.Element => {
  const { token } = useSelector((store: RootState) => store.aplication);

  const [missions, setMissions] = useState<IMission[]>([]);

  useEffect(() => {
    if (token) getMissions(OnEducaAPI, setMissions, token);
  }, [token]);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/" label="Missões" />
        <MissionsList>
          <MissionsListBox>
            {missions.map((mission) => (
              <MissionCard {...mission} />
            ))}
          </MissionsListBox>
        </MissionsList>
      </PageBox>
    </Page>
  );
};

export default Missions;
