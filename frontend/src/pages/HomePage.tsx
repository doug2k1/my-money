import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '../components/Card';

const StyledContainer = styled(Grid)`
  padding: ${(props) => props.theme.spacing(2)}px 0;
`;

const StyledPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;

const HomePage: React.FC = () => {
  return (
    <StyledContainer container spacing={2}>
      <Grid item xs={12}>
        <StyledPaper>aaa</StyledPaper>
      </Grid>
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
        <StyledPaper>aaa</StyledPaper>
      </Grid>
    </StyledContainer>
  );
};

export default HomePage;
