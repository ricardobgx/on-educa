/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import DeleteUnity from '../../components/Units/DeleteUnity';
import UnitsActions from '../../components/Units/UnitsActions';
import UnitsList from '../../components/Units/UnitsList';
import UpdateUnity from '../../components/Units/UpdateUnity';
import { getUnitsBySubject } from '../../functions/unity';
import OnEducaAPI from '../../services/api';
import { DEFAULT_UNITY } from '../../static/defaultEntitiesValues';
import { RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, UnitsBox } from './styles';
import { SuppliesBox } from '../../components/App/Supplies/styles';

interface IUnitsRouteParams {
  id: string;
}

export interface ICommonUnityProps {
  getUnits: () => void;
}

const Units = (): JSX.Element => {
  const [updateUnityIsVisible, setUpdateUnityIsVisible] = useState(false);
  const [deleteUnityIsVisible, setDeleteUnityIsVisible] = useState(false);

  const [units, setUnits] = useState<IUnity[]>([]);
  const [unity, setUnity] = useState<IUnity>(DEFAULT_UNITY);

  const route = useRouteMatch();
  const { id: subjectId } = route.params as IUnitsRouteParams;

  const { subject, aplication } = useSelector((store: RootState) => store);
  const { isStudent, token } = aplication;

  const getUnits = async (): Promise<void> => {
    await getUnitsBySubject(OnEducaAPI, subjectId, setUnits, token);
  };

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <Page>
      <PageBox>
        <SectionLabel
          backLink="/subjects"
          label={`${subject.name} - unidades`}
        />
        <SuppliesBox>
          <UnitsBox>
            <UnitsActions isStudent={isStudent} getUnits={getUnits} />
            {updateUnityIsVisible && (
              <UpdateUnity
                unity={unity}
                setUpdateUnityIsVisible={setUpdateUnityIsVisible}
                getUnits={getUnits}
              />
            )}
            {deleteUnityIsVisible && (
              <DeleteUnity
                unity={unity}
                setDeleteUnityIsVisible={setDeleteUnityIsVisible}
                getUnits={getUnits}
              />
            )}
            <UnitsList
              units={units}
              getUnits={getUnits}
              setUnity={setUnity}
              setUpdateUnityIsVisible={setUpdateUnityIsVisible}
              setDeleteUnityIsVisible={setDeleteUnityIsVisible}
            />
          </UnitsBox>
        </SuppliesBox>
      </PageBox>
    </Page>
  );
};

export default Units;
