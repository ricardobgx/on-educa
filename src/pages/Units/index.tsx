/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import UnitsActions from '../../components/Units/UnitsActions';
import UnitsList from '../../components/Units/UnitsList';
import { getUnitsBySubject } from '../../functions/unity';
import OnEducaAPI from '../../services/api';
import { ActionCreators, RootState } from '../../store';
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
  const [units, setUnits] = useState<IUnity[]>([]);

  const route = useRouteMatch();
  const { id: subjectId } = route.params as IUnitsRouteParams;

  const { subject, aplication } = useSelector((store: RootState) => store);
  const { isStudent, token } = aplication;

  const dispatch = useDispatch();
  const { loadPopup } = bindActionCreators(ActionCreators, dispatch);

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
            <UnitsList
              units={units}
              getUnits={getUnits}
              loadPopup={loadPopup}
            />
          </UnitsBox>
        </SuppliesBox>
      </PageBox>
    </Page>
  );
};

export default Units;
