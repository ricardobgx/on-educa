/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IUnity } from '../../../interfaces/Unity';
import UnityCard from '../UnityCard';
import { UnitsListBox, UnitCards } from './styles';

interface IUnitsListProps {
  units: IUnity[];
}

const UnitsList = (props: IUnitsListProps): JSX.Element => {
  const { units } = props;

  return (
    <UnitsListBox>
      <UnitCards>
        {units.map((unity) => (
          <UnityCard {...unity} />
        ))}
      </UnitCards>
    </UnitsListBox>
  );
};

export default UnitsList;
