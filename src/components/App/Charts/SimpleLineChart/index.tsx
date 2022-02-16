/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { SimpleLineChartBox } from './styles';

interface ISimpleLineChartProps {
  data: object[];
  width: number;
  height: number;
  colors: string[];
  labels: string[];
}

const SimpleLineChart = (props: ISimpleLineChartProps): JSX.Element => {
  const { data, width, height, colors, labels } = props;

  useEffect(() => {
    const chartLabels = document.getElementsByClassName(
      'recharts-legend-item-text',
    );

    if (chartLabels) {
      for (let i = 0; i < chartLabels.length; i += 1) {
        chartLabels[i].innerHTML = labels[i];
      }
    }
  }, []);

  return (
    <SimpleLineChartBox>
      <LineChart
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
        {data.length > 0 &&
          Object.keys(data[0]).map((key, index) => {
            return (
              key !== 'name' && (
                <Line
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index - 1]}
                  activeDot={{ r: 5 }}
                />
              )
            );
          })}
      </LineChart>
    </SimpleLineChartBox>
  );
};

export default SimpleLineChart;
