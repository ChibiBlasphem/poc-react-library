import { MouseEvent as ReactMouseEvent, RefObject, useEffect, useRef, useState } from 'react';

export interface UseDotMoveOptions {
  onStartMoving: (position: number) => void;
  onUpdatePosition: (position: number) => void;
  onStopMoving: () => void;
}

export function useDotMove(
  railRef: RefObject<HTMLDivElement>,
  interval: number,
  positions: number[],
  { onStartMoving, onStopMoving, onUpdatePosition }: UseDotMoveOptions
) {
  const [dotMoving, setDotMoving] = useState<number | null>(null);
  const lastPositionRef = useRef<number | null>(null);

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement>, dotNumber: number) => {
    const rail = railRef.current;
    if (!rail) return;

    const railRect = rail.getBoundingClientRect();
    const domRect = e.currentTarget.getBoundingClientRect();

    lastPositionRef.current = domRect.left + domRect.width / 2 - railRect.left;
    onStartMoving(lastPositionRef.current);
    setDotMoving(dotNumber);
  };

  useEffect(() => {
    if (dotMoving === null) return;
    if (!railRef.current) return;

    const railRect = railRef.current.getBoundingClientRect();

    const onMouseMove = (e: MouseEvent) => {
      if (dotMoving === null || lastPositionRef.current === null) {
        return;
      }

      const prevPosition = positions[dotMoving - 1];
      const nextPosition = positions[dotMoving + 1];

      const minPosition = prevPosition !== undefined ? prevPosition + interval : 0;
      const maxPosition = nextPosition !== undefined ? nextPosition - interval : railRect.width;

      const newPosition = lastPositionRef.current + e.movementX;
      lastPositionRef.current = newPosition;
      onUpdatePosition(Math.max(minPosition, Math.min(maxPosition, newPosition)));
    };

    const onMouseUp = () => {
      if (dotMoving === null) {
        return;
      }

      onStopMoving();
      setDotMoving(null);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [dotMoving, positions, onUpdatePosition, onStopMoving]);

  return {
    onMouseDown,
    dotMoving,
  };
}
