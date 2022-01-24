import React from 'react';
import { PracticePerformanceTypeLabelBox } from './styles';

interface IPracticePerformanceTypeLabelProps {
  performanceType: string;
}

const PracticePerformanceTypeLabel = (
  props: IPracticePerformanceTypeLabelProps,
): JSX.Element => {
  const { performanceType } = props;

  return (
    <PracticePerformanceTypeLabelBox>
      Pontuação - {performanceType}
    </PracticePerformanceTypeLabelBox>
  );
};

export default PracticePerformanceTypeLabel;
