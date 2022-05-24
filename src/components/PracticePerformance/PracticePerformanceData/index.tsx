import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  PracticePerformanceDataBox,
  PracticePerformanceDataHeader,
  PracticePerformanceDataLabel,
  PracticePerformanceDataValue,
} from './styles';

interface IPracticePerformanceDataProps {
  dataLabel: string;
  dataValue: number;
  XPValue: number;
  performanceType: string;
}

const PracticePerformanceData = (
  props: IPracticePerformanceDataProps,
): JSX.Element => {
  const { dataLabel, dataValue, XPValue, performanceType } = props;

  return (
    <PracticePerformanceDataBox className={`bd-rd-30 ${performanceType}`}>
      <PracticePerformanceDataHeader>
        <SmallMaterialIconOutlined icon="data_usage" color="" />
        <PracticePerformanceDataLabel>{dataLabel}</PracticePerformanceDataLabel>
      </PracticePerformanceDataHeader>
      <PracticePerformanceDataValue>
        {dataValue} x {XPValue} XP
      </PracticePerformanceDataValue>
    </PracticePerformanceDataBox>
  );
};

export default PracticePerformanceData;
