import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter Test', () => {
  it('Should show the current count', () => {
    const { getByText } = render(<Counter />);

    expect(getByText('0')).toBeDefined();
  });

  it('Should render with an initial value', () => {
    const { getByText } = render(<Counter initialCount={2} />);

    expect(getByText('2')).toBeDefined();
  });

  it('Should increment clicking the "+" button', async () => {
    const { getByText, getByRole } = render(<Counter />);

    expect(getByText('0')).toBeDefined();
    await user.click(
      getByRole('button', {
        name: '+',
      })
    );
    expect(getByText('1')).toBeDefined();
  });

  it('Should decrement clicking the "-" button', async () => {
    const { getByText, getByRole } = render(<Counter initialCount={1} />);

    expect(getByText('1')).toBeDefined();
    await user.click(
      getByRole('button', {
        name: '-',
      })
    );
    expect(getByText('0')).toBeDefined();
  });
});
