/* eslint-disable */

import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { PieChartWithPaddingAngleBox } from './styles';

interface IPieChartWithPaddingAngleData {
  name: string;
  value: number;
}

interface IPieChartWithPaddingAngleProps {
  data: IPieChartWithPaddingAngleData[];
  width: number;
  height: number;
  fill: string;
  colors: string[];
}

const PieChartWithPaddingAngle: React.FC<IPieChartWithPaddingAngleProps> = (
  props,
) => {
  const { data, width, height, fill, colors } = props;

  return (
    <PieChartWithPaddingAngleBox>
      <PieChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: -width * 0.1,
          left: -width * 0.1,
          bottom: 0,
        }}
      >
        <Pie
          data={data}
          cx={width * 0.62}
          cy={height * 0.45}
          innerRadius={(height * 0.55) / 2}
          outerRadius={height * 0.4}
          fill={fill}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </PieChartWithPaddingAngleBox>
  );
};

export default PieChartWithPaddingAngle;
