import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StyledPaper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;

const HomePage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <StyledPaper>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Patrimônio
          </Typography>
          <Typography component="p" variant="h4">
            R$ 3.024,00
          </Typography>
          <Typography color="textSecondary">&nbsp;</Typography>
        </StyledPaper>
      </Grid>
      <Grid item xs>
        <StyledPaper>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Rentabilidade
          </Typography>
          <Typography component="p" variant="h4">
            1.35 %
          </Typography>
          <Typography color="textSecondary">30 dias</Typography>
        </StyledPaper>
      </Grid>
      <Grid item xs>
        <StyledPaper>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Lucro
          </Typography>
          <Typography component="p" variant="h4">
            R$ 245,00
          </Typography>
          <Typography color="textSecondary">30 dias</Typography>
        </StyledPaper>
      </Grid>
      <Grid item xs={12}>
        <StyledPaper>aaa</StyledPaper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
