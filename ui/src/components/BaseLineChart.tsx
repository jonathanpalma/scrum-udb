import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data: Object[] = [];

function BaseLineChart(): JSX.Element {
  return (
    <div style={{ height: '70vh' }}>
      <ResponsiveContainer width="100%">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis
            label={{ value: '# Trabajos', angle: -90, position: 'insideLeft' }}
          />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="# Operarios"
            stroke="#4B286D"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BaseLineChart;
