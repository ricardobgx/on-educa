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
      className={`block-shadow-button ${
        selectedChartType === chartType ? 'selected' : ''
      }`}
    >
      <ChartTypeLabel>{label}</ChartTypeLabel>
    </ChartTypeButtonBox>
  );
};

export default ChartTypeButton;
