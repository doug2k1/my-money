import React from 'react';
import App from '../App';
import { render, fireEvent, screen } from './utils';

describe('App', () => {
  it('shows the home page by default', () => {
    // given
    render(<App />);

    // then
    expect(screen.getByTestId('home-page')).toBeVisible();
  });

  describe('when navigating to the investments page', () => {
    it('shows the investments page', () => {
      // given
      render(<App />);

      // when
      fireEvent.click(screen.getByText('Investimentos'));

      // then
      expect(screen.getByTestId('investments-page')).toBeVisible();
    });
  });

  describe('when navigating from investments to home', () => {
    it('shows the home page', () => {
      // given
      render(<App />);
      fireEvent.click(screen.getByText('Investimentos'));

      // when
      fireEvent.click(screen.getByText('Home'));

      // then
      expect(screen.getByTestId('home-page')).toBeVisible();
    });
  });
});
