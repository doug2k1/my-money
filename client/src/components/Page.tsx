import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Container from '@material-ui/core/Container';
import InvestmentsPage from '../pages/InvestmentsPage';

const Page: React.FC = () => {
  return (
    <main>
      <Container>
        <Switch>
          <Route path="/investments">
            <InvestmentsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </main>
  );
};

export default Page;
