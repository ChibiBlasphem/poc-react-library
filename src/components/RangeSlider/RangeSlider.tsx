import { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';

import { Tooltip } from '../../components/Tooltip/Tooltip';
import { DOMContextProvider } from '../../contexts/DOMContextContext';

import { useDotMove } from './RangeSlider.hooks';
import {
  RangeSliderDotRoot,
  RangeSliderMark,
  RangeSliderMarks,
  RangeSliderProcess,
  RangeSliderRail,
  RangeSliderRoot,
} from './RangeSlider.styles';

function getProcessLimits(
  railSize: number,
  positions: number[]
): null | [start: string, end: string] {
  if (positions.length < 2 || railSize === 0) return null;

  const start = Math.min(...positions);
  const end = Math.max(...positions);

  return [`${start}px`, `${end - start}px`];
}

function getNearestInterval(intervalSize: number, position: number) {
  return Math.round(position / intervalSize);
}

interface RangeSliderDotProps {
  position: number;
  isMoving: boolean;
  value: number;
  onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  onTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
}

function RangeSliderDot({
  onMouseDown,
  onTouchStart,
  position,
  isMoving,
  value,
}: RangeSliderDotProps) {
  const dotRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <RangeSliderDotRoot
        ref={dotRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{ left: `${position}px` }}
        isMoving={isMoving}
        data-testid="RangeSlider.Dot"
      />
      {isMoving && (
        <Tooltip anchorRef={dotRef} orientation="top">
          {value}
        </Tooltip>
      )}
    </>
  );
}

export interface RangeSliderProps {
  values: number[];
  min: number;
  max: number;
  step?: number;
  className?: string;
  showMarks?: boolean;
  onChange: (values: number[]) => void;
}

function generateMarks(min: number, max: number, interval: number) {
  const intervalCount = (max - min) / interval + 1;
  return Array.from({ length: intervalCount }, (_, i) => min + interval * i);
}

export function RangeSlider({
  values,
  min,
  max,
  className,
  step = 1,
  showMarks = false,
  onChange,
}: RangeSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const sliderRailRef = useRef<HTMLDivElement>(null);

  const [railSize, setRailSize] = useState<number>(0);
  const rangeLength = max - min;
  const numberOfSteps = rangeLength / step;
  const pixelsPerStep = (railSize * step) / rangeLength;

  if (numberOfSteps !== Math.floor(numberOfSteps)) {
    throw new Error('Cannot render RangeSlider. `(max - min)` should be dividable by `interval`');
  }

  const dotPositions = values.map((v) => ((v - min) / step) * pixelsPerStep);
  const { onMouseDown, onTouchStart, movingDotState } = useDotMove(
    sliderRailRef,
    pixelsPerStep,
    dotPositions,
    (dotIndex, dotPosition) => {
      const newValue = getNearestInterval(pixelsPerStep, dotPosition) * step + min;
      if (newValue !== values[dotIndex]) {
        const newValues = values.map((v, i) => (i === dotIndex ? newValue : v));
        onChange(newValues);
      }
    }
  );
  const positions = dotPositions.map((p, i) =>
    movingDotState.index === i ? movingDotState.position : p
  );
  const process = getProcessLimits(railSize, positions);
  const shouldDisplayMarks = showMarks && pixelsPerStep > 40;

  useEffect(() => {
    const rail = sliderRailRef.current;
    if (!rail) return;

    setRailSize(rail.getBoundingClientRect().width);

    const handleResize = () => {
      setRailSize(rail.getBoundingClientRect().width);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <RangeSliderRoot ref={rootRef} className={className}>
      <DOMContextProvider container={rootRef}>
        {shouldDisplayMarks && (
          <RangeSliderMarks data-testid="RangeSlider.SliderMarks">
            {generateMarks(min, max, step).map((v, i) => (
              <RangeSliderMark key={i} style={{ left: `${i * pixelsPerStep}px` }}>
                {v}
              </RangeSliderMark>
            ))}
          </RangeSliderMarks>
        )}
        <RangeSliderRail ref={sliderRailRef}>
          {process && (
            <RangeSliderProcess
              isMoving={movingDotState.index !== null}
              style={{ left: process[0], width: process[1] }}
            />
          )}
          {!!railSize &&
            positions.map((p, i) => {
              const isMoving = movingDotState.index === i;
              return (
                <RangeSliderDot
                  key={i}
                  isMoving={isMoving}
                  position={p}
                  onMouseDown={(e) => onMouseDown(e, i)}
                  onTouchStart={(e) => onTouchStart(e, i)}
                  value={values[i]!}
                />
              );
            })}
        </RangeSliderRail>
      </DOMContextProvider>
    </RangeSliderRoot>
  );
}
