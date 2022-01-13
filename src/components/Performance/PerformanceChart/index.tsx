import React from 'react';
import {
  PerformanceChartBox,
  ChartBoxLabel,
  ChartBox,
  ChartHeight,
  ChartHeightBar,
  ChartHeightLabel,
  Charts,
  Chart,
  ChartBar,
  ChartLabel,
  ChartHeightLabels,
  ChartHeightBarBox,
  ChartHeightPoints,
  ChartHeightPoint,
  ChartBarValue,
} from './styles';

export interface IChartProps {
  chartLabel: string;
  chartBar: number;
}

export interface IPerformanceChartProps {
  performanceChartLabel: string;
  heightBar: number;
  charts: IChartProps[];
}

const PerformanceChart = (props: IPerformanceChartProps): JSX.Element => {
  const { performanceChartLabel, heightBar, charts } = props;

  return (
    <PerformanceChartBox>
      <ChartBoxLabel>{performanceChartLabel}</ChartBoxLabel>
      <ChartBox>
        <ChartHeight>
          <ChartHeightLabels>
            <ChartHeightLabel>{heightBar}</ChartHeightLabel>
            <ChartHeightLabel>{heightBar / 2}</ChartHeightLabel>
            <ChartHeightLabel>0</ChartHeightLabel>
          </ChartHeightLabels>

          <ChartHeightBar>
            <ChartHeightBarBox />

            <ChartHeightPoints>
              <ChartHeightPoint />
              <ChartHeightPoint />
              <ChartHeightPoint />
            </ChartHeightPoints>
          </ChartHeightBar>
        </ChartHeight>

        <Charts>
          {charts.map((chart) => (
            <Chart key={chart.chartBar}>
              <ChartBarValue>{chart.chartBar}</ChartBarValue>
              <ChartBar
                style={{
                  height: `${((chart.chartBar * 100) / heightBar) * 2}px`,
                }}
              />
              <ChartLabel>{chart.chartLabel}</ChartLabel>
            </Chart>
          ))}
        </Charts>
      </ChartBox>
    </PerformanceChartBox>
  );
};

export default PerformanceChart;
