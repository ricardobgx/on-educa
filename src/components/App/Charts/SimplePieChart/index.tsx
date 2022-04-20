import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { SimplePieChartBox } from './styles';

export interface ISimplePieChartData {
  name: string;
  value: number;
}

interface ISimplePieChartProps {
  data: ISimplePieChartData[];
  width: number;
  height: number;
  color: string;
  colors: string[];
}

const SimplePieChart = (props: ISimplePieChartProps): JSX.Element => {
  const { data, width, height, color, colors } = props;

  return (
    <SimplePieChartBox>
      <PieChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: -5,
          right: -width * 0.1,
          left: -width * 0.1,
          bottom: 0,
        }}
      >
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={width * 0.6}
          cy={height * 0.45}
          innerRadius={(height * 0.28) / 2}
          outerRadius={height * 0.28}
          fill={color}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout={width >= 520 ? 'horizontal' : 'vertical'} />
      </PieChart>
    </SimplePieChartBox>
  );
};

export default SimplePieChart;
