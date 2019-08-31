import React, { useContext } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import DayLog from 'interfaces/DayLog';
import { LogContext } from './HomePage';

function JobsInTimeChart(): JSX.Element {
  // const logsByDay: Array<DayLog> = [];
  const logsByDay = useContext<Array<DayLog>>(LogContext);
  const jobsByDay: any = logsByDay.map((dayLog: DayLog) => ({
    date: dayLog.day.format('YYYY MM DD'),
    noTrabajos: dayLog.jobs.length,
  }));

  return (
    <div style={{ height: '70vh' }}>
      <ResponsiveContainer width="100%">
        <AreaChart
          width={730}
          height={250}
          data={jobsByDay}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis
            label={{ value: 'noTrabajos', angle: -90, position: 'insideLeft' }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="noTrabajos"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default JobsInTimeChart;
