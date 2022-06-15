import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Test', () => {
  it('Should show the current count', () => {
    const { getByText } = render(<Counter />);

    expect(getByText('0')).toBeDefined();
  });
});
