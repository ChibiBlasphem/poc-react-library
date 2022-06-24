import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
import { ButtonSize } from './Button.types';

describe('<Button />', () => {
  it('should show my text in the button', () => {
    const { getByText } = render(
      <Button size={ButtonSize.SMALL} onClick={() => {}}>
        Hey
      </Button>
    );
    expect(getByText('Hey')).toBeDefined();
  });

  it('should trigger my callback when clicking on the button', async () => {
    const onClickMock = vi.fn();
    const { getByRole } = render(<Button size={ButtonSize.SMALL} onClick={onClickMock} />);

    await user.click(getByRole('button'));

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should not trigger my callback when clicking on disabled button', async () => {
    const onClickMock = vi.fn();
    const { getByRole } = render(<Button disabled size={ButtonSize.SMALL} onClick={onClickMock} />);

    await user.click(getByRole('button'));

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
