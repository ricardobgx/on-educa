/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { ICommonUnityProps } from '../../../pages/Units';
import UnityCard from '../UnityCard';
import { UnitsListBox, UnitCards } from './styles';

interface IUnitsListProps extends ICommonUnityProps {
  units: IUnity[];
  setUnity: (value: IUnity) => void;
  setUpdateUnityIsVisible: (value: boolean) => void;
  setDeleteUnityIsVisible: (value: boolean) => void;
}

const UnitsList = (props: IUnitsListProps): JSX.Element => {
  const { units, setUnity, setUpdateUnityIsVisible, setDeleteUnityIsVisible } =
    props;

  return (
    <UnitsListBox>
      <UnitCards>
        {units.map((unity, index) => (
          <UnityCard
            index={index}
            unity={unity}
            setUnity={setUnity}
            setUpdateUnityIsVisible={setUpdateUnityIsVisible}
            setDeleteUnityIsVisible={setDeleteUnityIsVisible}
          />
        ))}
      </UnitCards>
    </UnitsListBox>
  );
};

export default UnitsList;
