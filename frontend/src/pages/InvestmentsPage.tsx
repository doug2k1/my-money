import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { gql, useQuery } from '@apollo/client';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const investmentsQuery = gql`
  query InvestmentsPageQuery {
    investments {
      id
      name
      broker {
        name
      }
      balance
      invested
    }
  }
`;

const StyledContainer = styled(Grid)`
  padding: ${(props) => props.theme.spacing(2)}px 0;
`;

const StyledPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;

const InvestmentsPage: React.FC = () => {
  const { loading, data, error } = useQuery<{
    investments: {
      id: number;
      name: string;
      balance: number;
      invested: number;
      broker: { name: string };
    }[];
  }>(investmentsQuery);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p data-testid="error">{error.toString()}</p>;
  }

  return (
    <StyledContainer>
      <StyledPaper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Investimento</TableCell>
              <TableCell>Corretora</TableCell>
              <TableCell align="right">Total Investido</TableCell>
              <TableCell align="right">Saldo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.investments.map((investment, index) => (
              <TableRow key={investment.id} data-testid={`row-${index}`}>
                <TableCell>{investment.name}</TableCell>
                <TableCell>{investment.broker.name}</TableCell>
                <TableCell align="right">
                  {currencyFormatter.format(investment.invested)}
                </TableCell>
                <TableCell align="right">
                  {currencyFormatter.format(investment.balance)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledPaper>
    </StyledContainer>
  );
};

export default InvestmentsPage;
