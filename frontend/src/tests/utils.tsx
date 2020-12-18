import React, { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'node-fetch';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { MuiThemeProvider } from '@material-ui/core';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};
const link = new HttpLink({
  uri: 'http://localhost:5000/graphql',

  // Use explicit `window.fetch` so that outgoing requests
  // are captured and deferred until the Service Worker is ready.
  fetch: (...args) => fetch(...args),
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions,
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
