import { RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';

import { useScroll } from '../contexts/ScrollContext';

const CROPPED_OFFSET = 10;

export const horizontalOrientations = ['left', 'right'] as const;
export const verticalOrientations = ['top', 'bottom'] as const;

export const isHorizontalOrientation = (
  orientation: AnchorOrientation
): orientation is HorizontalOrientation => {
  return horizontalOrientations.includes(orientation as HorizontalOrientation);
};
export const isVerticalOrientation = (
  orientation: AnchorOrientation
): orientation is VerticalOrientation => {
  return verticalOrientations.includes(orientation as VerticalOrientation);
};

export type HorizontalOrientation = typeof horizontalOrientations[number];
export type VerticalOrientation = typeof verticalOrientations[number];
export type AnchorOrientation = HorizontalOrientation | VerticalOrientation;

export type Offset = number | ((size: number) => number);

export type AnchorOffset = {
  mainAxis?: Offset;
  crossAxis?: Offset;
  anchor?: Offset;
};

export type SurroundingOffset = {
  top?: Offset;
  right?: Offset;
  bottom?: Offset;
  left?: Offset;
};

export type Position = {
  top: number;
  left: number;
};
export type UseAnchorOptions = {
  orientation?: AnchorOrientation;
  offset?: AnchorOffset;
  shouldRelayout?: () => boolean;
  reflectMainAxisWhenCropped?: boolean;
  moveCrossAxisWhenCropped?: boolean;
  surroundingOffset?: SurroundingOffset;
};

function getOffset(size: number, offset: Offset, direction: 1 | -1) {
  return typeof offset === 'number' ? offset * direction : offset(size) * direction;
}

function getSurroundingOffsets(parentWindow: Window, surroundingOffset: SurroundingOffset) {
  const top = getOffset(parentWindow.innerHeight, surroundingOffset.top ?? CROPPED_OFFSET, 1);
  const bottom = getOffset(
    parentWindow.innerHeight,
    surroundingOffset.bottom ?? CROPPED_OFFSET,
    -1
  );
  const left = getOffset(parentWindow.innerWidth, surroundingOffset.left ?? CROPPED_OFFSET, 1);
  const right = getOffset(parentWindow.innerWidth, surroundingOffset.right ?? CROPPED_OFFSET, -1);

  return { top, right, bottom, left };
}

function calculatePosition(
  anchorRect: DOMRect,
  selfRect: DOMRect,
  orientation: AnchorOrientation,
  { mainAxis = 0, crossAxis = 0, anchor = 0 }: AnchorOffset
) {
  switch (orientation) {
    case 'right':
      return {
        top: Math.round(
          anchorRect.top +
            getOffset(selfRect.height, crossAxis, -1) +
            getOffset(anchorRect.height, anchor, 1)
        ),
        left: Math.round(
          anchorRect.left + anchorRect.width + getOffset(selfRect.width, mainAxis, 1)
        ),
      };
    case 'left':
      return {
        top: Math.round(
          anchorRect.top +
            getOffset(selfRect.height, crossAxis, -1) +
            getOffset(anchorRect.height, anchor, 1)
        ),
        left: Math.round(
          anchorRect.left - selfRect.width + getOffset(selfRect.width, mainAxis, -1)
        ),
      };
    case 'top':
      return {
        top: Math.round(
          anchorRect.top - selfRect.height + getOffset(selfRect.height, mainAxis, -1)
        ),
        left: Math.round(
          anchorRect.left +
            getOffset(selfRect.width, crossAxis, -1) +
            getOffset(anchorRect.width, anchor, 1)
        ),
      };
    case 'bottom':
      return {
        top: Math.round(
          anchorRect.top + anchorRect.height + getOffset(selfRect.height, mainAxis, 1)
        ),
        left: Math.round(
          anchorRect.left +
            getOffset(selfRect.width, crossAxis, -1) +
            getOffset(anchorRect.width, anchor, 1)
        ),
      };
  }
}

export function useAnchor(
  anchorRef: RefObject<Element>,
  selfRef: RefObject<HTMLElement>,
  options: UseAnchorOptions = {}
): {
  anchor: Position;
  orientation: AnchorOrientation;
  crossAxisDifference: number;
} {
  const {
    orientation: baseOrientation = 'left',
    offset = {},
    surroundingOffset = {},
    shouldRelayout,
    reflectMainAxisWhenCropped = false,
    moveCrossAxisWhenCropped = false,
  } = options;

  const scrollContext = useScroll();
  const lastOrientation = useRef(baseOrientation);
  const [orientation, setOrientation] = useState(baseOrientation);
  const [crossAxisDifference, setCrossAxisDifference] = useState(0);
  const [anchor, setAnchor] = useState<Position>({ top: 0, left: 0 });
  const lastAnchor = useRef<Position>(anchor);

  if (lastOrientation.current !== baseOrientation) {
    lastOrientation.current = baseOrientation;
    setOrientation(baseOrientation);
  }

  const mainAxisOffset = offset.mainAxis;
  const crossAxisOffset = offset.crossAxis;
  const anchorOffset = offset.anchor;

  const reposition = useCallback(() => {
    const userOffset = {
      mainAxis: mainAxisOffset,
      crossAxis: crossAxisOffset,
      anchor: anchorOffset,
    };
    if (!anchorRef.current || !selfRef.current || (shouldRelayout && !shouldRelayout())) return;

    const parentWindow = anchorRef.current.ownerDocument?.defaultView;
    if (!parentWindow) return;

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const selfRect = selfRef.current.getBoundingClientRect();

    let { top, left } = calculatePosition(anchorRect, selfRect, baseOrientation, userOffset);
    const parentOffsets = getSurroundingOffsets(parentWindow, surroundingOffset);

    const isCroppedVertically =
      top + selfRect.height > parentWindow.innerHeight + parentOffsets.bottom ||
      top < parentOffsets.top;
    const isCroppedHorizontally =
      left + selfRect.width > parentWindow.innerWidth + parentOffsets.right ||
      left < parentOffsets.left;

    if (reflectMainAxisWhenCropped) {
      let tmpOrientation = baseOrientation;

      if (isHorizontalOrientation(baseOrientation) && isCroppedHorizontally) {
        const newOrientation: AnchorOrientation = baseOrientation === 'left' ? 'right' : 'left';
        const { top: recalculedTop, left: recalculedLeft } = calculatePosition(
          anchorRect,
          selfRect,
          newOrientation,
          userOffset
        );

        if (
          recalculedLeft + selfRect.width <= parentWindow.innerWidth + parentOffsets.right &&
          recalculedLeft >= parentOffsets.left
        ) {
          tmpOrientation = newOrientation;
          top = recalculedTop;
          left = recalculedLeft;
        }
      }
      if (isVerticalOrientation(baseOrientation) && isCroppedVertically) {
        const newOrientation: AnchorOrientation = baseOrientation === 'top' ? 'bottom' : 'top';
        const { top: recalculedTop, left: recalculedLeft } = calculatePosition(
          anchorRect,
          selfRect,
          newOrientation,
          userOffset
        );

        if (
          recalculedTop + selfRect.height <= parentWindow.innerHeight + parentOffsets.bottom &&
          recalculedTop >= parentOffsets.top
        ) {
          tmpOrientation = newOrientation;
          top = recalculedTop;
          left = recalculedLeft;
        }
      }

      setOrientation(tmpOrientation);
    }

    if (moveCrossAxisWhenCropped) {
      let tmpCrossAxisDifference = 0;
      if (isHorizontalOrientation(baseOrientation) && isCroppedVertically) {
        let recalculatedTop;
        if (top < parentOffsets.top) {
          recalculatedTop = Math.min(parentOffsets.top, anchorRect.top);
        } else if (top + selfRect.height > parentWindow.innerHeight + parentOffsets.bottom) {
          recalculatedTop = Math.max(
            parentWindow.innerHeight + parentOffsets.bottom - selfRect.height,
            anchorRect.top + anchorRect.height - selfRect.height
          );
        }
        if (recalculatedTop) {
          tmpCrossAxisDifference = recalculatedTop - top;
          top = recalculatedTop;
        }
      }
      if (isVerticalOrientation(baseOrientation) && isCroppedHorizontally) {
        let recalculatedLeft;
        if (left < parentOffsets.left) {
          recalculatedLeft = Math.min(parentOffsets.left, anchorRect.left);
        } else if (left + selfRect.width > parentWindow.innerWidth + parentOffsets.right) {
          recalculatedLeft = Math.max(
            parentWindow.innerWidth + parentOffsets.right - selfRect.width,
            anchorRect.left + anchorRect.width - selfRect.width
          );
        }
        if (recalculatedLeft) {
          tmpCrossAxisDifference = recalculatedLeft - left;
          left = recalculatedLeft;
        }
      }
      setCrossAxisDifference(tmpCrossAxisDifference);
    }

    if (lastAnchor.current.top === top && lastAnchor.current.left === left) {
      return;
    }

    lastAnchor.current = { top, left };
    setAnchor({ top, left });
  }, [
    surroundingOffset,
    mainAxisOffset,
    crossAxisOffset,
    anchorOffset,
    baseOrientation,
    reflectMainAxisWhenCropped,
    moveCrossAxisWhenCropped,
    anchorRef,
    selfRef,
    shouldRelayout,
  ]);

  useLayoutEffect(() => {
    if (!anchorRef.current) return;
    if (shouldRelayout && !shouldRelayout()) return;

    const parentWindow = anchorRef.current.ownerDocument;
    if (!parentWindow) return;

    const removeScrollEvent = scrollContext.add(reposition);
    parentWindow.addEventListener('resize', reposition);

    reposition();

    return () => {
      removeScrollEvent();
      parentWindow.removeEventListener('resize', reposition);
    };
  }, [
    reposition,
    baseOrientation,
    reflectMainAxisWhenCropped,
    moveCrossAxisWhenCropped,
    anchorRef,
    selfRef,
    shouldRelayout,
    scrollContext,
  ]);

  return {
    anchor,
    orientation,
    crossAxisDifference,
  };
}
