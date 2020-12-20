import React, { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { MuiThemeProvider } from '@material-ui/core';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

const customRender = (ui: ReactElement, options = {}) => {
  return render(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
