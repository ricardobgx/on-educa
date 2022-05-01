/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable */

import React, { useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { SimpleBarChartBox } from './styles';

export interface ISimpleBarChartData {
  name: string;
  value: number;
}

interface ISimpleBarChartProps {
  data: ISimpleBarChartData[];
  valueLabel: string;
  width: number;
  height: number;
  color: string;
}

const SimpleBarChart = (props: ISimpleBarChartProps): JSX.Element => {
  const { data, valueLabel, width, height, color } = props;

  useEffect(() => {
    const chartLabels = document.getElementsByClassName(
      'recharts-legend-item-text',
    );

    if (chartLabels) {
      chartLabels[0].innerHTML = valueLabel;
    }
  }, []);

  return (
    <SimpleBarChartBox>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 0,
          right: 10,
          left: -30,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill={color} />
      </BarChart>
    </SimpleBarChartBox>
  );
};

export default SimpleBarChart;
