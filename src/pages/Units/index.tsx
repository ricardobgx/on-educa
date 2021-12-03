import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import UnitsActions from '../../components/Units/UnitsActions';
import UnitsList from '../../components/Units/UnitsList';
import { IUnity } from '../../interfaces/IUnity';
import { Page } from '../components';
import { PageBox, UnitsBox } from './styles';

const units: IUnity[] = [
  {
    id: '1',
    title: 'Substantivos',
  },
  {
    id: '2',
    title: 'Substantivos',
  },
  {
    id: '3',
    title: 'Substantivos',
  },
  {
    id: '4',
    title: 'Substantivos',
  },
  {
    id: '5',
    title: 'Substantivos',
  },
  {
    id: '6',
    title: 'Substantivos',
  },
];

const Units = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <SectionLabel
          backLink="/subjects"
          label="Língua Portuguesa - unidades"
        />
        <UnitsBox>
          <UnitsActions />
          <UnitsList units={units} />
        </UnitsBox>
      </PageBox>
    </Page>
  );
};

export default Units;
