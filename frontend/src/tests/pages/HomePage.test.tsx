import React from 'react';
import { screen } from '@testing-library/react';
import { graphql } from 'msw';
import { render } from '../utils';
import HomePage from '../../pages/HomePage';
import { server } from '../server';

describe('Home Page', () => {
  describe('when data is loading', () => {
    it('shows loading message', () => {
      // given
      render(<HomePage />);

      // then
      expect(screen.getByText('Carregando...')).toBeVisible();
    });
  });

  describe('when data loads successfully', () => {
    it('shows cards', async () => {
      // given
      render(<HomePage />);
      await screen.findByTestId('card-patrimony');

      // then
      expect(screen.getByTestId('card-patrimony')).toHaveTextContent(
        'R$300.00'
      );
      expect(screen.getByTestId('card-profit-percent')).toHaveTextContent(
        '100%'
      );
      expect(screen.getByTestId('card-profit')).toHaveTextContent('R$150.00');
    });

    it('shows chart', async () => {
      // given
      render(<HomePage />);
      await screen.findByTestId('chart');

      // then
      expect(screen.getByTestId('chart')).toBeVisible();
    });
  });

  describe('when data fails to load', () => {
    it('shows an error message', async () => {
      // given
      server.use(
        graphql.query('HomePageQuery', (req, res, ctx) => {
          return res(ctx.status(403));
        })
      );

      render(<HomePage />);
      const errorElement = await screen.findByTestId('error');

      // then
      expect(errorElement).toBeVisible();
    });
  });
});
