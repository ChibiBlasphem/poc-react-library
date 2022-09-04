import type { FlattenSimpleInterpolation } from 'styled-components';
import styled, { css } from 'styled-components';

import type { AnchorOrientation } from '../../hooks/useAnchor';

type TooltipArrowProps = {
  orientation: AnchorOrientation;
  movedBy: number;
};

const setArrowPosition = (orientation: AnchorOrientation): FlattenSimpleInterpolation => {
  switch (orientation) {
    case 'bottom':
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 10px;

        &:after {
          top: 0;
          left: 50%;
        }
      `;
    case 'top':
      return css`
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 10px;

        &:after {
          top: 10px;
          left: 50%;
        }
      `;
    case 'right':
      return css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        width: 10px;
        height: 20px;

        &:after {
          top: 10px;
          left: 0%;
        }
      `;
    case 'left':
      return css`
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        width: 10px;
        height: 20px;

        &:after {
          top: 10px;
          left: 10px;
        }
      `;
  }
};

export const Arrow = styled.div.attrs<TooltipArrowProps>(({ orientation, movedBy }) => {
  return orientation === 'left' || orientation === 'right'
    ? { style: { marginTop: `${-movedBy}px` } }
    : { style: { marginLeft: `${-movedBy}px` } };
})<TooltipArrowProps>`
  position: absolute;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    background-color: var(--component-Tooltip-background);
    box-shadow: 0 0 12px 0 rgba(38, 38, 38, 0.2);
  }

  ${({ orientation: position }) => setArrowPosition(position)}
`;

export const TooltipContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: var(--component-Tooltip-background);
  color: var(--component-Tooltip-text);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
`;

export const TooltipWrapper = styled.div`
  padding: 10px;
  font-size: 12px;
`;
