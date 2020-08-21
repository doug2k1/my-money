import React, { FC } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '../components/Card';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
const dateFormatter = new Intl.DateTimeFormat('pt-BR');

const chartData = [
  { date: '2020-08-20T21:26:18.695Z', value: 100 },
  { date: '2020-07-20T21:26:18.695Z', value: 110 },
  { date: '2020-06-20T21:26:18.695Z', value: 130 },
];

const StyledContainer = styled(Grid)`
  padding: ${(props) => props.theme.spacing(2)}px 0;
`;

const StyledPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;

const HomePage: FC = () => {
  return (
    <StyledContainer container spacing={2}>
      <Grid item xs>
        <Card title="Patrimônio" value={3024} />
      </Grid>
      <Grid item xs>
        <Card title="Rentabilidade" value={0.0135} type="percent" />
      </Grid>
      <Grid item xs>
        <Card title="Lucro" value={245} />
      </Grid>
      <Grid item xs={12}>
        <StyledPaper>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <XAxis
                dataKey="date"
                tickFormatter={(date) => dateFormatter.format(new Date(date))}
              />
              <YAxis
                tickFormatter={(value) => currencyFormatter.format(value)}
                width={100}
              />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <Tooltip
                labelFormatter={(date) => dateFormatter.format(new Date(date))}
                formatter={(value, name, props) => {
                  return [currencyFormatter.format(value as number), 'Valor'];
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </StyledPaper>
      </Grid>
    </StyledContainer>
  );
};

export default HomePage;
