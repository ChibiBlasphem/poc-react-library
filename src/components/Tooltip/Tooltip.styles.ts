import type { FlattenSimpleInterpolation } from 'styled-components';
import styled, { css } from 'styled-components';
import { cVar } from 'themthem/component';
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
    background-color: ${cVar('Tooltip.background', '#fff')};
  }

  ${({ orientation: position }) => setArrowPosition(position)}
`;

export const TooltipContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${cVar('Tooltip.background', '#fff')};
  color: ${cVar('Tooltip.text', '#333')};
  border-radius: 4px;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.16));
`;

export const TooltipWrapper = styled.div`
  padding: 10px;
  font-size: 12px;
`;
