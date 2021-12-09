import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import UnitsActions from '../../components/Units/UnitsActions';
import UnitsList from '../../components/Units/UnitsList';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { Page } from '../components';
import { PageBox, UnitsBox } from './styles';

interface IUnitsRouteParams {
  id: string;
}

const Units = (): JSX.Element => {
  const [units, setUnits] = useState([]);
  const route = useRouteMatch();
  const { id } = route.params as IUnitsRouteParams;

  const { subject } = useSelector((store: State) => store);

  const getUnits = async (): Promise<void> => {
    await OnEducaAPI.get(`/units/subject/${id}`).then((response) => {
      setUnits(response.data);
    });
  };

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/learn" label={`${subject.name} - unidades`} />
        <UnitsBox>
          <UnitsActions />
          <UnitsList units={units} />
        </UnitsBox>
      </PageBox>
    </Page>
  );
};

export default Units;
