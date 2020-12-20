import React from 'react';
import { graphql } from 'msw';
import { render, screen } from '../utils';
import { server } from '../server';
import InvestmentsPage from '../../pages/InvestmentsPage';

describe('Investments Page', () => {
  describe('when data is loading', () => {
    it('shows loading message', () => {
      // given
      render(<InvestmentsPage />);

      // then
      expect(screen.getByText('Carregando...')).toBeVisible();
    });
  });

  describe('when data loads successfully', () => {
    it('shows investments table', async () => {
      // given
      render(<InvestmentsPage />);
      await screen.findByText('Investimento');

      // then
      expect(screen.getByTestId('row-0')).toHaveTextContent(
        ['Stock X', 'Fooinvest', 'R$50.00', 'R$100.00'].join('')
      );
      expect(screen.getByTestId('row-1')).toHaveTextContent(
        ['Xpto Fund', 'Some Broker', 'R$100.00', 'R$200.00'].join('')
      );
    });
  });

  describe('when data fails to load', () => {
    it('shows an error message', async () => {
      // given
      server.use(
        graphql.query('InvestmentsPageQuery', (req, res, ctx) => {
          return res(ctx.status(403));
        })
      );

      render(<InvestmentsPage />);
      const errorElement = await screen.findByTestId('error');

      // then
      expect(errorElement).toBeVisible();
    });
  });
});
