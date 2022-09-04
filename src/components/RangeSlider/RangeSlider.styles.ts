import styled, { css } from 'styled-components';

export interface RangeSliderDotProps {
  isMoving: boolean;
}

export const RangeSliderDotRoot = styled.div<RangeSliderDotProps>`
  position: absolute;
  z-index: 2;
  height: var(--component-RangeSlider-dot-size);
  width: var(--component-RangeSlider-dot-size);
  transform: translate(-50%, -50%);
  top: 50%;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: var(--component-RangeSlider-dot-color);
  border: var(--component-RangeSlider-dot-border-size) solid
    var(--component-RangeSlider-dot-border-color);
  box-shadow: var(--component-RangeSlider-dot-shadow);
  cursor: pointer;

  ${(props) =>
    props.isMoving
      ? css`
          background-color: var(--component-RangeSlider-dot-color__moving);
          border-color: var(--component-RangeSlider-dot-border-color__moving);
          box-shadow: var(--component-RangeSlider-dot-shadow__moving);
        `
      : css`
          transition: left 0.5s ease 0s;
          &:hover {
            background-color: var(--component-RangeSlider-dot-color__hover);
            border-color: var(--component-RangeSlider-dot-border-color__hover);
            box-shadow: var(--component-RangeSlider-dot-shadow__hover);
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
  background-color: var(--component-Rangeslider-process-color);
  border-radius: calc(var(--component-Rangeslider-height) / 2);

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
  background-color: var(--component-RangeSlider-rail-color);
  border-radius: calc(var(--component-RangeSlider-height) / 2);
`;

export const RangeSliderRoot = styled.div`
  --component-RangeSlider-height: 4px;
  --component-RangeSlider-dot-size: 16px;
  --component-RangeSlider-dot-border-size: 2px;
  --component-RangeSlider-dot-color: #fff;
  --component-RangeSlider-dot-color__hover: #fff;
  --component-RangeSlider-dot-color__moving: #fff;
  --component-RangeSlider-dot-border-color: transparent;
  --component-RangeSlider-dot-border-color__hover: transparent;
  --component-RangeSlider-dot-border-color__moving: transparent;
  --component-RangeSlider-dot-shadow: 0.5px 0.5px 2px 1px rgb(0 0 0 / 32%);
  --component-RangeSlider-dot-shadow__hover: 0.5px 0.5px 2px 1px rgb(0 0 0 / 32%);
  --component-RangeSlider-dot-shadow__moving: 0.5px 0.5px 2px 1px rgb(0 0 0 / 32%);
  --component-RangeSlider-rail-color: #ccc;
  --component-Rangeslider-process-color: #3498db;

  position: relative;
  box-sizing: content-box;
  user-select: none;
  display: block;
  height: var(--component-RangeSlider-height);
  padding: calc(var(--component-RangeSlider-dot-size) / 2) 0;
  border-radius: calc(var(--component-Rangeslider-height) / 2);
`;
