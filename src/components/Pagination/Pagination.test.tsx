import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  it('should correctly highlight the current page', () => {
    const { getByRole, rerender } = render(
      <Pagination currentPage={1} totalPages={5} onPageSelected={() => {}} />
    );

    expect(getByRole('link', { current: true }).textContent).toBe('1');

    rerender(<Pagination currentPage={2} totalPages={5} onPageSelected={() => {}} />);

    expect(getByRole('link', { current: true }).textContent).toBe('2');
  });

  it('should not show the left arrow if the page 1 is displayed', () => {
    const { queryByLabelText } = render(
      <Pagination currentPage={1} totalPages={5} onPageSelected={() => {}} />
    );

    expect(queryByLabelText('Go to first page')).toBeNull();
  });

  it('should show the right arrow if the last page is not displayed', () => {
    const { queryByLabelText } = render(
      <Pagination currentPage={1} totalPages={5} onPageSelected={() => {}} />
    );

    expect(queryByLabelText('Go to last page')).not.toBeNull();
  });

  it('should show the left arrow if the page 1 is not displayed', () => {
    const { queryByLabelText } = render(
      <Pagination currentPage={5} totalPages={5} onPageSelected={() => {}} />
    );

    expect(queryByLabelText('Go to first page')).not.toBeNull();
  });

  it('should not show the right arrow if the last page is displayed', () => {
    const { queryByLabelText } = render(
      <Pagination currentPage={5} totalPages={5} onPageSelected={() => {}} />
    );

    expect(queryByLabelText('Go to last page')).toBeNull();
  });

  it('should correctly show the number of neighbours specified', () => {
    // When 1 is selected with 1 neighbour
    const { queryByText, rerender } = render(
      <Pagination currentPage={1} totalPages={5} onPageSelected={() => {}} />
    );

    expect(queryByText('0')).toBeNull();
    expect(queryByText('1')).not.toBeNull();
    expect(queryByText('2')).not.toBeNull();
    expect(queryByText('3')).toBeNull();

    // When 2 is selected with 1 neighbour
    rerender(<Pagination currentPage={2} totalPages={5} onPageSelected={() => {}} />);

    expect(queryByText('1')).not.toBeNull();
    expect(queryByText('2')).not.toBeNull();
    expect(queryByText('3')).not.toBeNull();
    expect(queryByText('4')).toBeNull();

    // When 5 is selected with 1 neighbour
    rerender(<Pagination currentPage={5} totalPages={5} onPageSelected={() => {}} />);

    expect(queryByText('3')).toBeNull();
    expect(queryByText('4')).not.toBeNull();
    expect(queryByText('5')).not.toBeNull();
    expect(queryByText('6')).toBeNull();

    // When 4 is selected with 2 neighbour
    rerender(
      <Pagination currentPage={4} totalPages={5} neighbours={2} onPageSelected={() => {}} />
    );

    expect(queryByText('1')).toBeNull();
    expect(queryByText('2')).not.toBeNull();
    expect(queryByText('3')).not.toBeNull();
    expect(queryByText('4')).not.toBeNull();
    expect(queryByText('5')).not.toBeNull();
    expect(queryByText('6')).toBeNull();
  });

  it('should call onPageSelected when clicking a page', async () => {
    const mock = vi.fn();

    const { getByLabelText, getByText, rerender } = render(
      <Pagination currentPage={1} totalPages={5} onPageSelected={mock} />
    );

    await user.click(getByText('2'));
    expect(mock).toHaveBeenLastCalledWith(2);

    rerender(<Pagination currentPage={3} totalPages={5} onPageSelected={mock} />);

    await user.click(getByLabelText('Go to first page'));
    expect(mock).toHaveBeenLastCalledWith(1);

    await user.click(getByLabelText('Go to last page'));
    expect(mock).toHaveBeenLastCalledWith(5);
  });
});
