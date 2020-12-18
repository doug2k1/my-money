import { graphql } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  graphql.query('HomePageQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        investments: [
          {
            balance: 100,
            invested: 50,
          },
          {
            balance: 200,
            invested: 100,
          },
        ],
      })
    );
  }),

  graphql.query('ChartQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        investments: [
          {
            id: 1,
            name: 'Stock X',
            balanceUpdates: [{ date: '1', amount: 100 }],
          },
          {
            id: 2,
            name: 'Xpto Fund',
            balanceUpdates: [{ date: '1', amount: 200 }],
          },
        ],
      })
    );
  }),

  graphql.query('InvestmentsPageQuery', (req, res, ctx) => {
    return res(
      ctx.data({
        investments: [
          {
            id: 1,
            name: 'Stock X',
            broker: {
              name: 'Fooinvest',
            },
            balance: 100,
            invested: 50,
          },
          {
            id: 2,
            name: 'Xpto Fund',
            broker: {
              name: 'Some Broker',
            },
            balance: 200,
            invested: 100,
          },
        ],
      })
    );
  }),
];

export const server = setupServer(...handlers);
