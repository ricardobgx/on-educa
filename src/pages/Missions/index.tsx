/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import MissionCard from '../../components/Missions/MissionCard';
import { IMission } from '../../interfaces/IMission';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, MissionsList, MissionsListBox } from './styles';

const missions: IMission[] = [
  {
    id: '1',
    title: 'Estude 2 conteúdos',
    relatedActivity: 'duel',
    repetitions: 2,
    requirements: [
      {
        id: '1',
        missionId: '1',
        description: 'win',
      },
    ],
    reward: 30,
  },
  {
    id: '2',
    title: 'Participe de 2 duelos',
    relatedActivity: 'duel',
    repetitions: 2,
    requirements: [
      {
        id: '1',
        missionId: '1',
        description: 'win',
      },
    ],
    reward: 50,
  },
  {
    id: '3',
    title: 'Vença 1 duelo',
    relatedActivity: 'duel',
    repetitions: 1,
    requirements: [
      {
        id: '1',
        missionId: '1',
        description: 'win',
      },
    ],
    reward: 50,
  },
  {
    id: '4',
    title: 'Pratique 3 conteúdos',
    relatedActivity: 'duel',
    repetitions: 3,
    requirements: [
      {
        id: '1',
        missionId: '1',
        description: 'win',
      },
    ],
    reward: 80,
  },
  {
    id: '1',
    title: 'Vença dois duelos',
    relatedActivity: 'duel',
    repetitions: 2,
    requirements: [
      {
        id: '1',
        missionId: '1',
        description: 'win',
      },
    ],
    reward: 50,
  },
];

const Missions = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/home" label="Missões" />
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
