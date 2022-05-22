/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { ICommonUnityProps } from '../../../pages/Units';
import UnityCard from '../UnityCard';
import { UnitsListBox } from './styles';

interface IUnitsListProps extends ICommonUnityProps {
  units: IUnity[];
  loadPopup: (popup: IPopup) => void;
}

const UnitsList = (props: IUnitsListProps): JSX.Element => {
  const { units, getUnits, loadPopup } = props;

  return (
    <UnitsListBox className="supplies-list">
      {units.map((unity, index) => (
        <UnityCard
          index={index}
          unity={unity}
          getUnits={getUnits}
          loadPopup={loadPopup}
        />
      ))}
    </UnitsListBox>
  );
};

export default UnitsList;
