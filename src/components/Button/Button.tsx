import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { PropsWithChildren, MouseEvent } from 'react';
import { ButtonContainer } from './Button.styles';
import { ButtonSize } from './Button.types';

export interface ButtonIcons {
  left?: FontAwesomeIconProps['icon'];
  right?: FontAwesomeIconProps['icon'];
}

export interface ButtonProps {
  icons?: ButtonIcons;
  size: ButtonSize;
  className?: string;
  disabled?: boolean;
  onClick: (e: MouseEvent) => void;
}

export function Button({
  icons,
  size,
  children,
  className,
  disabled = false,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      className={className}
      size={size}
      withText={!!children}
    >
      {icons?.left ? <FontAwesomeIcon icon={icons.left} /> : null}
      {children ? <span>{children}</span> : null}
      {icons?.right ? <FontAwesomeIcon icon={icons.right} /> : null}
    </ButtonContainer>
  );
}
