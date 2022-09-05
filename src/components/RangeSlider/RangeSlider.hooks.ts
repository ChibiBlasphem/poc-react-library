import {
  MouseEvent as ReactMouseEvent,
  RefObject,
  TouchEvent as ReactTouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

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
  const lastDotPositionRef = useRef<number | null>(null);
  const lastEventPositionRef = useRef<number | null>(null);

  const startMoving = (target: HTMLElement, dotNumber: number) => {
    const rail = railRef.current;
    if (!rail) return;

    const railRect = rail.getBoundingClientRect();
    const domRect = target.getBoundingClientRect();

    lastDotPositionRef.current = domRect.left + domRect.width / 2 - railRect.left;
    onStartMoving(lastDotPositionRef.current);
    setDotMoving(dotNumber);
  };

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement>, dotNumber: number) => {
    lastEventPositionRef.current = e.clientX;
    startMoving(e.currentTarget, dotNumber);
  };

  const onTouchStart = (e: ReactTouchEvent<HTMLDivElement>, dotNumber: number) => {
    if (!e.touches[0]) return;

    lastEventPositionRef.current = e.touches[0].clientX;
    startMoving(e.currentTarget, dotNumber);
  };

  useEffect(() => {
    if (dotMoving === null) return;
    if (!railRef.current) return;

    const railRect = railRef.current.getBoundingClientRect();

    const handleMove = (movementX: number) => {
      if (dotMoving === null || lastDotPositionRef.current === null) {
        return;
      }

      const prevPosition = positions[dotMoving - 1];
      const nextPosition = positions[dotMoving + 1];

      const minPosition = prevPosition !== undefined ? prevPosition + interval : 0;
      const maxPosition = nextPosition !== undefined ? nextPosition - interval : railRect.width;

      const newPosition = lastDotPositionRef.current + movementX;
      lastDotPositionRef.current = newPosition;
      onUpdatePosition(Math.max(minPosition, Math.min(maxPosition, newPosition)));
    };

    const onMouseMove = (e: MouseEvent) => {
      lastEventPositionRef.current = e.clientX;
      handleMove(e.movementX);
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (lastEventPositionRef.current === null || !e.touches[0]) return;

      const lastEventPosition = lastEventPositionRef.current;
      lastEventPositionRef.current = e.touches[0].clientX;

      handleMove(lastEventPositionRef.current - lastEventPosition);
    };

    const handleStop = () => {
      if (dotMoving === null) {
        return;
      }

      onStopMoving();
      setDotMoving(null);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('mouseup', handleStop);
    document.addEventListener('touchend', handleStop);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseup', handleStop);
      document.removeEventListener('touchend', handleStop);
    };
  }, [dotMoving, positions, onUpdatePosition, onStopMoving]);

  return {
    onMouseDown,
    onTouchStart,
    dotMoving,
  };
}
