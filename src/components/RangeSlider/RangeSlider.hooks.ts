import {
  MouseEvent as ReactMouseEvent,
  RefObject,
  TouchEvent as ReactTouchEvent,
  useEffect,
  useReducer,
  useRef,
} from 'react';

export interface UseDotMoveOptions {
  onStartMoving: (position: number) => void;
  onUpdatePosition: (position: number) => void;
  onStopMoving: () => void;
}

type MovingDotState = { index: null; position: null } | { index: number; position: number };

const movingDotReducer = (_state: MovingDotState, action: MovingDotState): MovingDotState => {
  return action;
};

export function useDotMove(
  railRef: RefObject<HTMLDivElement>,
  pixelsPerStep: number,
  positions: number[],
  onUpdate: (dotIndex: number, position: number) => void
) {
  // Storing last event position in a ref to avoid useless rerenders on each event
  const lastEventPositionRef = useRef<number | null>(null);
  const [movingDotState, setMovingDotState] = useReducer(movingDotReducer, {
    index: null,
    position: null,
  });

  const startMoving = (target: HTMLElement, dotNumber: number) => {
    const rail = railRef.current;
    if (!rail) return;

    const railRect = rail.getBoundingClientRect();
    const domRect = target.getBoundingClientRect();

    // Get the center position of the dot relative to the rail
    const currentDotPosition = domRect.left + domRect.width / 2 - railRect.left;

    setMovingDotState({ index: dotNumber, position: currentDotPosition });
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
    if (movingDotState.index === null) return;
    if (railRef.current === null) return;

    const railRect = railRef.current.getBoundingClientRect();

    const handleMove = (eventX: number) => {
      if (lastEventPositionRef.current === null) return;

      const lastEventPosition = lastEventPositionRef.current;
      const deltaX = eventX - lastEventPosition;

      const { index, position } = movingDotState;

      const prevDotPosition = positions[index - 1];
      const nextDotPosition = positions[index + 1];

      // We don't want dot to overlap
      // The dot cannot go lower than (prevDotPosition + pixelsPerStep) or 0
      // The dot cannot go higher than (nextDotPosition - pixelsPerStep) or rail.width
      const minPosition = prevDotPosition !== undefined ? prevDotPosition + pixelsPerStep : 0;
      const maxPosition =
        nextDotPosition !== undefined ? nextDotPosition - pixelsPerStep : railRect.width;

      const presumedNewPosition = position + deltaX;
      const newPosition = Math.max(minPosition, Math.min(maxPosition, presumedNewPosition));

      const newMovingState = { index, position: newPosition };
      setMovingDotState(newMovingState);
      onUpdate(newMovingState.index, newMovingState.position);

      lastEventPositionRef.current = eventX;
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
      // Prevent default behavior to avoid scrolling the page
      e.preventDefault();
      if (!e.touches[0]) return;

      handleMove(e.touches[0].clientX);
    };

    const handleStop = () => {
      setMovingDotState({ index: null, position: null });
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
  }, [movingDotState, positions]);

  return {
    onMouseDown,
    onTouchStart,
    movingDotState,
  };
}
