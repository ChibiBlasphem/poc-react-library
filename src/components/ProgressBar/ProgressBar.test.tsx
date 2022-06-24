import { describe, it, expect, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('<ProgressBar />', () => {
  it('Should not show elapased bar nor remaining time if no planned duration', () => {
    const { queryByTestId, getByText } = render(<ProgressBar />);

    expect(queryByTestId('progressbar-elapsed')).toBeNull();
    expect(getByText('no time estimation available')).toBeDefined();
  });

  it('Should correctly show the triggerer', () => {
    const { getByText } = render(<ProgressBar triggerer="Pikachu" />);

    expect(getByText('initiated by Pikachu')).toBeDefined();
  });

  it('Should correctly show the estimation', () => {
    vi.useFakeTimers();

    const { getByTestId, getByText } = render(<ProgressBar planned={30} />);

    expect(getByTestId('progressbar-elapsed')).toBeDefined();
    expect(getByText('about 30s remaining')).toBeDefined();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(getByText('about 29s remaining')).toBeDefined();

    vi.restoreAllMocks();
  });

  it('Should correctly show the estimation based on elapsed prop', () => {
    vi.useFakeTimers();

    const { getByTestId, getByText } = render(<ProgressBar planned={30} elapsed={5} />);

    expect(getByTestId('progressbar-elapsed')).toBeDefined();
    expect(getByText('about 25s remaining')).toBeDefined();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(getByText('about 24s remaining')).toBeDefined();

    vi.restoreAllMocks();
  });
});
