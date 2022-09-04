import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { IdiomaticExpandableCard } from './IdiomaticExpandableCard';

describe('<ExpandableCard />', () => {
  it('should show my children by default', () => {
    const { getByText } = render(
      <IdiomaticExpandableCard>
        <IdiomaticExpandableCard.Title>I am here</IdiomaticExpandableCard.Title>
      </IdiomaticExpandableCard>
    );
    expect(getByText('I am here')).toBeDefined();
  });

  it('should be expandable by default', async () => {
    const { getByRole, queryByText } = render(
      <IdiomaticExpandableCard>
        <IdiomaticExpandableCard.Title>I am here</IdiomaticExpandableCard.Title>
        <IdiomaticExpandableCard.Details>I am the details</IdiomaticExpandableCard.Details>
      </IdiomaticExpandableCard>
    );

    const button = getByRole('button');
    expect(button).toBeDefined();

    expect(queryByText('I am the details')).toBeNull();

    await user.click(button);

    expect(queryByText('I am the details')).not.toBeNull();
  });

  it('should not show button nor detail if not expandable', () => {
    const { queryByRole, queryByText } = render(
      <IdiomaticExpandableCard expandable={false}>
        <IdiomaticExpandableCard.Title>I am here</IdiomaticExpandableCard.Title>
        <IdiomaticExpandableCard.Details>I am the details</IdiomaticExpandableCard.Details>
      </IdiomaticExpandableCard>
    );

    expect(queryByRole('button')).toBeNull();
    expect(queryByText('I am the details')).toBeNull();
  });
});
