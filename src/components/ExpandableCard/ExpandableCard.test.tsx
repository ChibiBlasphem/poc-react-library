import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { ExpandableCard } from './ExpandableCard';

describe('<ExpandableCard />', () => {
  it('should show my children by default', () => {
    const { getByText } = render(<ExpandableCard>I am here</ExpandableCard>);
    expect(getByText('I am here')).toBeDefined();
  });

  it('should be expandable by default', async () => {
    const { getByRole, queryByText } = render(
      <ExpandableCard detail="I am the details">I am here</ExpandableCard>
    );

    const button = getByRole('button');
    expect(button).toBeDefined();

    expect(queryByText('I am the details')).toBeNull();

    await user.click(button);

    expect(queryByText('I am the details')).not.toBeNull();
  });

  it('should not show button nor detail if not expandable', () => {
    const { queryByRole, queryByText } = render(
      <ExpandableCard expandable={false} detail="I am the details">
        I am here
      </ExpandableCard>
    );

    expect(queryByRole('button')).toBeNull();
    expect(queryByText('I am the details')).toBeNull();
  });
});
