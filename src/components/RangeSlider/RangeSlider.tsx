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

export { RangeSliderDefaultStyle, generateRangeSliderVars } from './RangeSlider.theme';

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
  interval?: number;
  className?: string;
  marks?: boolean;
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
  interval = 1,
  marks = false,
  onChange,
}: RangeSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const sliderRailRef = useRef<HTMLDivElement>(null);
  const [overridePosition, setOverridePosition] = useState<number>(0);
  const [railSize, setRailSize] = useState<number>(0);
  const intervalCount = (max - min) / interval;
  const intervalPixel = (railSize * interval) / (max - min);

  if (intervalCount !== Math.floor(intervalCount)) {
    throw new Error('Cannot render RangeSlider. `(max - min)` should be dividable by `interval`');
  }

  const basePositions = values.map((v) => ((v - min) / interval) * intervalPixel);
  const { onMouseDown, onTouchStart, dotMoving } = useDotMove(
    sliderRailRef,
    intervalPixel,
    basePositions,
    {
      onStartMoving(position) {
        setOverridePosition(position);
      },
      onUpdatePosition(position) {
        setOverridePosition(position);
      },
      onStopMoving() {},
    }
  );
  const positions = basePositions.map((p, i) => (dotMoving === i ? overridePosition : p));
  const process = getProcessLimits(railSize, positions);
  const showMarks = marks && intervalPixel > 40;

  useEffect(() => {
    if (dotMoving === null) return;

    const newValue = getNearestInterval(intervalPixel, overridePosition) * interval + min;
    onChange(values.map((v, i) => (i === dotMoving ? newValue : v)));
  }, [dotMoving, overridePosition, interval, min]);

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
        {showMarks && (
          <RangeSliderMarks>
            {generateMarks(min, max, interval).map((v, i) => (
              <RangeSliderMark key={i} style={{ left: `${i * intervalPixel}px` }}>
                {v}
              </RangeSliderMark>
            ))}
          </RangeSliderMarks>
        )}
        <RangeSliderRail ref={sliderRailRef}>
          {process && (
            <RangeSliderProcess
              isMoving={dotMoving !== null}
              style={{ left: process[0], width: process[1] }}
            />
          )}
          {!!railSize &&
            positions.map((p, i) => {
              const isMoving = dotMoving === i;
              return (
                <RangeSliderDot
                  key={i}
                  isMoving={isMoving}
                  position={isMoving ? overridePosition : p}
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
