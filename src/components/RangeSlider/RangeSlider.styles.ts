import styled, { css } from 'styled-components';
import { generateTooltipVars } from '@/components/Tooltip/Tooltip';
import { cVar } from 'themthem/component';

export interface RangeSliderDotProps {
  isMoving: boolean;
}

export const RangeSliderDotRoot = styled.div<RangeSliderDotProps>`
  position: absolute;
  z-index: 2;
  height: ${cVar('RangeSlider.dot.size')};
  width: ${cVar('RangeSlider.dot.size')};
  transform: translate(-50%, -50%);
  top: 50%;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${cVar('RangeSlider.dot.color')};
  border: ${cVar('RangeSlider.dot.border-size')} solid ${cVar('RangeSlider.dot.border-color')};
  box-shadow: ${cVar('RangeSlider.dot.shadow')};
  cursor: pointer;

  ${(props) =>
    props.isMoving
      ? css`
          background-color: ${cVar('RangeSlider.dot.color.$moving')};
          border-color: ${cVar('RangeSlider.dot.border-color.$moving')};
          box-shadow: ${cVar('RangeSlider.dot.shadow.$moving')};
        `
      : css`
          transition: left 0.5s ease 0s;
          &:hover {
            background-color: ${cVar('RangeSlider.dot.color.$hover')};
            border-color: ${cVar('RangeSlider.dot.border-color.$hover')};
            box-shadow: ${cVar('RangeSlider.dot.shadow.$hover')};
          }
        `}
`;

export const RangeSliderMark = styled.div`
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`;

export const RangeSliderMarks = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
`;

export interface RangeSliderProcessProps {
  isMoving: boolean;
}

export const RangeSliderProcess = styled.div<RangeSliderProcessProps>`
  position: absolute;
  z-index: 1;
  height: 100%;
  top: 0;
  background-color: ${cVar('RangeSlider.process.color')};
  border-radius: calc(${cVar('RangeSlider.height')} / 2);

  ${(props) =>
    !props.isMoving &&
    css`
      transition: 0.5s ease 0s;
      transition-property: left, width;
    `}
`;

export const RangeSliderRail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition-property: width, height, left, right, top, bottom;
  background-color: ${cVar('RangeSlider.rail.color')};
  border-radius: calc(${cVar('RangeSlider.height')} / 2);
`;

export const RangeSliderRoot = styled.div`
  ${generateTooltipVars({
    background: cVar('RangeSlider.tooltip.background'),
    text: cVar('RangeSlider.tooltip.text'),
  })}

  position: relative;
  box-sizing: content-box;
  user-select: none;
  display: block;
  height: ${cVar('RangeSlider.height')};
  padding: calc(${cVar('RangeSlider.dot.size')} / 2) 0;
  border-radius: calc(${cVar('RangeSlider.height')} / 2);
`;
