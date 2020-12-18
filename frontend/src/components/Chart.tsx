import { gql, useQuery } from '@apollo/client';
import React, { FC } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const investmentsQuery = gql`
  query ChartQuery {
    investments {
      id
      name
      balanceUpdates(order: [["date", "ASC"]]) {
        date
        amount
      }
    }
  }
`;

interface QueryData {
  investments: {
    id: number;
    name: string;
    balanceUpdates: {
      date: string;
      amount: number;
    }[];
  }[];
}

const selectColor = (number: number) => {
  const hue = number * 137.508; // use golden angle approximation
  return `hsl(${hue},100%,30%)`;
};

const buildChartData = (data: QueryData) => {
  const series: {
    name: string;
    id: number;
    data: { date: number; value: number }[];
  }[] = [];

  data.investments.forEach((investment) => {
    const obj = {
      name: investment.name,
      id: investment.id,
      data: investment.balanceUpdates.map((balanceUpdate) => ({
        date: parseInt(balanceUpdate.date, 10),
        value: balanceUpdate.amount,
      })),
    };

    series.push(obj);
  });

  return series;
};

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const dateFormatter = new Intl.DateTimeFormat('pt-BR');

const Chart: FC = () => {
  const { data } = useQuery<QueryData>(investmentsQuery);

  if (!data) {
    return null;
  }

  const chartData = buildChartData(data);

  return (
    <div data-testid="chart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart>
          <XAxis
            dataKey="date"
            type="number"
            tickFormatter={(date) => dateFormatter.format(new Date(date))}
            domain={['dataMin', 'dataMax']}
          />
          <YAxis
            tickFormatter={(value) => currencyFormatter.format(value)}
            width={100}
          />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          {chartData.map((series) => (
            <Line
              key={series.id}
              type="monotone"
              data={series.data}
              dataKey="value"
              name={series.name}
              stroke={selectColor(series.id)}
            />
          ))}

          <Tooltip
            labelFormatter={(date) => dateFormatter.format(new Date(date))}
            formatter={(value, name) => {
              return [currencyFormatter.format(value as number), name];
            }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
