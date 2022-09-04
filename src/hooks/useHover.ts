import { useRef, useState } from 'react';

type UseHoverReturn = [boolean, { onMouseOver: () => void; onMouseLeave: () => void }];

export interface UseHoverOptions {
  delayEnter?: number;
  delayLeave?: number;
}

export const DEFAULT_HOVER_ENTER_DELAY = 150;
export const DEFAULT_HOVER_LEAVE_DELAY = 150;

export function useHover({
  delayEnter = DEFAULT_HOVER_ENTER_DELAY,
  delayLeave = DEFAULT_HOVER_LEAVE_DELAY,
}: UseHoverOptions = {}): UseHoverReturn {
  const toLeaveRef = useRef<ReturnType<typeof setTimeout>>();
  const toOverRef = useRef<ReturnType<typeof setTimeout>>();
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = () => {
    if (isHover) {
      if (toLeaveRef.current) {
        clearTimeout(toLeaveRef.current);
        toLeaveRef.current = undefined;
      }
    } else {
      toOverRef.current = setTimeout(() => {
        if (toOverRef.current !== undefined) {
          setIsHover(true);
        }
      }, delayEnter);
    }
  };

  const onMouseLeave = () => {
    if (!isHover) {
      if (toOverRef.current) {
        clearTimeout(toOverRef.current);
        toOverRef.current = undefined;
      }
    } else {
      toLeaveRef.current = setTimeout(() => {
        if (toLeaveRef.current !== undefined) {
          setIsHover(false);
        }
      }, delayLeave);
    }
  };

  return [isHover, { onMouseOver, onMouseLeave }];
}
