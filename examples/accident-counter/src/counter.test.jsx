import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe.todo('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decrementButon = screen.getByRole('button', { name : /decremenet/i });
    const resetButton = screen.getByRole('button', { name : /reset/i });

    expect(decrementButon).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const title = screen.getByRole('title', { name : /day/i });
    expect(title).toHaveTextContent('days');
  });

  it(
    'increments the count when the "Increment" button is clicked',
    async () => {
      const incremenetButton = screen.getByRole('button', { name: /incremenet/i});
      const count = screen.getByTestId('counter-count');
      //fireEvent(incremenetButton, new MouseEvent('click'));
      //await userEvent.click(incremenetButton);
      await act(async () => {
        await userEvent.click(incremenetButton);
      });
      expect(count).toHaveTextContent('1');
    },
  );

  it('displays "day" when the count is 1', async () => {
    const incremenetButton = screen.getByRole('button', { name: /incremenet/i});
    fireEvent(incremenetButton, new MouseEvent('click'));
    const title = screen.getByRole('title', { name : /day/i });
    expect(title).toHaveTextContent('day');
  });

  it.todo(
    'decrements the count when the "Decrement" button is clicked',
    async () => {},
  );

  it.todo('does not allow decrementing below 0', async () => {});

  it.todo(
    'resets the count when the "Reset" button is clicked',
    async () => {},
  );

  it.todo(
    'disables the "Decrement" and "Reset" buttons when the count is 0',
    () => {},
  );

  it.todo('updates the document title based on the count', async () => {});
});
