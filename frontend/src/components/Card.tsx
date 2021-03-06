import React, { FC } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

interface Props {
  title: string;
  value: number;
  type?: 'percent' | 'currency';
  'data-testid'?: string;
}

const formatters = {
  percent: new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumFractionDigits: 2,
  }),
  currency: Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }),
};

const StyledPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;

const Card: FC<Props> = ({
  title,
  value,
  'data-testid': dataTestId,
  type = 'currency',
}) => {
  return (
    <StyledPaper data-testid={dataTestId}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      <Typography component="p" variant="h4">
        {formatters[type].format(value)}
      </Typography>
      <Typography color="textSecondary">&nbsp;</Typography>
    </StyledPaper>
  );
};

export default Card;
