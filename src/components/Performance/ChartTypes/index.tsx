import React from 'react';
import ChartTypeButton from '../ChartTypeButton';
import { ChartTypesBox } from './styles';

interface IChartType {
  label: string;
  chartType: string;
}

interface IChartTypesProps {
  chartTypes: IChartType[];
  selectedChartType: string;
  setSelectedChartType: (value: string) => void;
}

const ChartTypes = (props: IChartTypesProps): JSX.Element => {
  const { chartTypes, selectedChartType, setSelectedChartType } = props;

  return (
    <ChartTypesBox>
      {chartTypes.map((chartType) => (
        <ChartTypeButton
          label={chartType.label}
          chartType={chartType.chartType}
          selectedChartType={selectedChartType}
          setSelectedChartType={setSelectedChartType}
        />
      ))}
    </ChartTypesBox>
  );
};

export default ChartTypes;
