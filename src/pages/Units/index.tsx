import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import UnitsActions from '../../components/Units/UnitsActions';
import UnitsList from '../../components/Units/UnitsList';
import OnEducaAPI from '../../services/api';
import { Page } from '../components';
import { PageBox, UnitsBox } from './styles';

interface IUnitsRouteParams {
  id: string;
}

const Units = (): JSX.Element => {
  const [units, setUnits] = useState([]);
  const route = useRouteMatch();
  const { id } = route.params as IUnitsRouteParams;

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
