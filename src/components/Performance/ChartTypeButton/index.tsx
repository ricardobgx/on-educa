import React from 'react';
import theme from '../../../global/styles/theme';
import { ChartTypeButtonBox, ChartTypeLabel } from './styles';

interface IChartTypeButtonProps {
  label: string;
  chartType: string;
  selectedChartType: string;
  setSelectedChartType: (value: string) => void;
}

const ChartTypeButton = (props: IChartTypeButtonProps): JSX.Element => {
  const { label, chartType, selectedChartType, setSelectedChartType } = props;

  return (
    <ChartTypeButtonBox
      onClick={() => setSelectedChartType(chartType)}
      style={{
        background:
          selectedChartType === chartType ? theme.colors.textColor : '',
        color: selectedChartType === chartType ? theme.colors.boxColor : '',
      }}
    >
      <ChartTypeLabel>{label}</ChartTypeLabel>
    </ChartTypeButtonBox>
  );
};

export default ChartTypeButton;
