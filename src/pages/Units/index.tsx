/* eslint-disable react-hooks/exhaustive-deps */

import { AxiosInstance } from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import NewUnity from '../../components/Units/NewUnity';
import UnitsActions from '../../components/Units/UnitsActions';
import UnitsList from '../../components/Units/UnitsList';
import { IUnity } from '../../interfaces/IUnity';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { Page } from '../components';
import { PageBox, UnitsBox } from './styles';

interface IUnitsRouteParams {
  id: string;
}

const Units = (): JSX.Element => {
  const [newUnityIsVisible, setNewUnityIsVisible] = useState(false);
  const [units, setUnits] = useState<IUnity[]>([]);
  const route = useRouteMatch();
  const { id } = route.params as IUnitsRouteParams;

  const { subject, aplication } = useSelector((store: State) => store);
  const { userType } = aplication;

  const getUnits = async (
    API: AxiosInstance,
    setUnitsState: (value: IUnity[]) => void,
  ): Promise<void> => {
    await API.get(`/units/subject/${id}`).then((response) => {
      setUnitsState(response.data);
    });
  };

  useEffect(() => {
    getUnits(OnEducaAPI, setUnits);
  }, []);

  return (
    <Page>
      <PageBox>
        <SectionLabel backLink="/learn" label={`${subject.name} - unidades`} />
        <UnitsBox>
          <UnitsActions
            userType={userType}
            setNewUnityIsVisible={setNewUnityIsVisible}
          />
          {newUnityIsVisible && (
            <NewUnity
              setNewUnityIsVisible={setNewUnityIsVisible}
              getUnits={getUnits}
              setUnits={setUnits}
            />
          )}
          <UnitsList units={units} />
        </UnitsBox>
      </PageBox>
    </Page>
  );
};

export default Units;
