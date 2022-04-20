/* eslint-disable react-hooks/exhaustive-deps */

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
import { BarChartWithTwoValuesBox } from './styles';

export interface IBarChartWithTwoValuesData {
  name: string;
  firstValue: number;
  secondValue: number;
}

interface IBarChartWithTwoValuesProps {
  data: IBarChartWithTwoValuesData[];
  firstValueLabel: string;
  secondValueLabel: string;
  width: number;
  height: number;
  primaryColor: string;
  secondaryColor: string;
}

const BarChartWithTwoValues = (
  props: IBarChartWithTwoValuesProps,
): JSX.Element => {
  const {
    data,
    firstValueLabel,
    secondValueLabel,
    width,
    height,
    primaryColor,
    secondaryColor,
  } = props;

  useEffect(() => {
    const chartLabels = document.getElementsByClassName(
      'recharts-legend-item-text',
    );

    if (chartLabels) {
      chartLabels[0].innerHTML = firstValueLabel;
      chartLabels[1].innerHTML = secondValueLabel;
    }
  }, []);

  return (
    <BarChartWithTwoValuesBox>
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
        <Bar dataKey="firstValue" alphabetic="Olá" fill={primaryColor} />
        <Bar dataKey="secondValue" fill={secondaryColor} />
      </BarChart>
    </BarChartWithTwoValuesBox>
  );
};

export default BarChartWithTwoValues;
