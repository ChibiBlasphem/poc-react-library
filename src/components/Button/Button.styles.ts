import styled, { css } from 'styled-components';
import { ButtonSize } from './Button.types';

export interface ButtonContainerProps {
  size: ButtonSize;
  withText: boolean;
}

const buttonSizeStyles = {
  [ButtonSize.SMALL]: css<ButtonContainerProps>`
    height: 32px;
    min-width: 32px;
    font-size: 12px;
    letter-spacing: 0.8px;

    padding-top: 8px;
    padding-bottom: 8px;

    ${(props) =>
      props.withText &&
      css`
        padding-left: 16px;
        padding-right: 16px;
      `}
  `,
  [ButtonSize.MEDIUM]: css<ButtonContainerProps>`
    height: 40px;
    min-width: 40px;
    font-size: 14px;
    letter-spacing: 1.4px;

    padding-top: 12px;
    padding-bottom: 12px;

    ${(props) =>
      props.withText &&
      css`
        padding-left: 16px;
        padding-right: 16px;
      `}
  `,
  [ButtonSize.LARGE]: css<ButtonContainerProps>`
    height: 48px;
    min-width: 48px;
    font-size: 16px;
    letter-spacing: 1.8px;

    padding-top: 12px;
    padding-bottom: 12px;

    ${(props) =>
      props.withText &&
      css`
        padding-left: 24px;
        padding-right: 24px;
      `}
  `,
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  --button-color__hover: var(--button-color);
  --button-background-color__hover: var(--button-background-color);
  --button-border-color__hover: var(--button-border-color);
  --button-color__disabled: var(--button-color);
  --button-background-color__disabled: var(--button-background-color);
  --button-border-color__disabled: var(--button-border-color);

  border-radius: 1px;
  border-style: solid;
  line-height: 50%;
  cursor: pointer;
  -webkit-appearance: button;

  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  color: var(--button-color);
  background-color: var(--button-background-color);
  border-color: var(--button-border-color);

  &:hover {
    color: var(--button-color__hover);
    background-color: var(--button-background-color__hover);
    border-color: var(--button-border-color__hover);
  }

  &:disabled {
    color: var(--button-color__disabled);
    background-color: var(--button-background-color__disabled);
    border-color: var(--button-border-color__disabled);
    opacity: 0.36;
    cursor: not-allowed;
  }

  ${(props) => buttonSizeStyles[props.size]}
`;
