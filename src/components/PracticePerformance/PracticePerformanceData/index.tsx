import React from 'react';
import {
  PracticePerformanceDataBox,
  PracticePerformanceDataLabel,
  PracticePerformanceDataValue,
} from './styles';

interface IPracticePerformanceDataProps {
  dataLabel: string;
  dataValue: number;
  XPValue: number;
  color: string;
}

const PracticePerformanceData = (
  props: IPracticePerformanceDataProps,
): JSX.Element => {
  const { dataLabel, dataValue, XPValue, color } = props;

  return (
    <PracticePerformanceDataBox color={color}>
      <PracticePerformanceDataLabel>{dataLabel}</PracticePerformanceDataLabel>
      <PracticePerformanceDataValue>
        {dataValue} x {XPValue} XP
      </PracticePerformanceDataValue>
    </PracticePerformanceDataBox>
  );
};

export default PracticePerformanceData;
