import type { CSSProperties, MouseEvent, ReactElement, ReactNode, RefObject } from 'react';
import { cloneElement, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useDOMContext } from '../../contexts/DOMContextContext';
import { AnchorOrientation, useAnchor, UseAnchorOptions } from '../../hooks/useAnchor';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useHover, UseHoverOptions } from '../../hooks/useHover';
import { usePortalContainer } from '../../hooks/usePortalContainer';

import { Arrow, TooltipContainer, TooltipWrapper } from './Tooltip.styles';

export { TooltipDefaulStyle, generateTooltipVars } from './Tooltip.theme';

export const TOOLTIP_CONTAINER_ID = 'react-tooltip-container';

interface ObjectWithRef<T = unknown> {
  ref: RefObject<T>;
}

export type TooltipProps = {
  container?: RefObject<HTMLElement>;
  children?: ReactNode;
  orientation?: AnchorOrientation;
  anchorRef: RefObject<Element>;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickOutside?: () => void;
  style?: Pick<CSSProperties, 'width' | 'height'> & {
    '--component-Tooltip-background'?: string;
    '--component-Tooltip-text'?: string;
  };
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  offset?: number;
  surroundingOffset?: UseAnchorOptions['surroundingOffset'];
};

const getArrowPosition = (orientation: AnchorOrientation): AnchorOrientation => {
  switch (orientation) {
    case 'left':
      return 'right';
    case 'right':
      return 'left';
    case 'top':
      return 'bottom';
    case 'bottom':
      return 'top';
  }
};

export function Tooltip({
  container,
  children,
  className,
  style = {},
  anchorRef,
  orientation = 'left',
  offset = 10,
  surroundingOffset,
  onClick,
  onClickOutside,
  onMouseLeave,
  onMouseOver,
}: TooltipProps) {
  const tooltipRef = useRef(null);
  const tooltipDOMContext = useDOMContext(tooltipRef);
  const [tooltipContainer, setTooltipContainer] = useState<HTMLElement>();
  const { width, height, ...styleRest } = style;
  const parentContainer = tooltipDOMContext ?? anchorRef.current?.ownerDocument;

  const {
    anchor: { top, left },
    orientation: calculatedOrientation,
    crossAxisDifference,
  } = useAnchor(anchorRef, tooltipRef, {
    orientation,
    offset: {
      anchor: (anchorSize) => anchorSize * 0.5,
      crossAxis: (tooltipSize) => tooltipSize * 0.5,
      mainAxis: offset,
    },
    surroundingOffset,
    reflectMainAxisWhenCropped: true,
    moveCrossAxisWhenCropped: true,
  });
  useClickOutside(tooltipDOMContext, [anchorRef, tooltipRef], onClickOutside);
  usePortalContainer(TOOLTIP_CONTAINER_ID, parentContainer, container, setTooltipContainer);

  return tooltipContainer
    ? createPortal(
        <TooltipContainer
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          ref={tooltipRef}
          style={{ top: `${top}px`, left: `${left}px`, width, height, ...styleRest }}
        >
          <TooltipWrapper className={className}>{children}</TooltipWrapper>
          <Arrow
            orientation={getArrowPosition(calculatedOrientation)}
            movedBy={crossAxisDifference}
          />
        </TooltipContainer>,
        tooltipContainer
      )
    : null;
}

export type HoverTooltipProps = {
  children: ReactElement;
  tooltipContent: TooltipProps['children'];
  forceWhen?: boolean;
  disabled?: boolean;
} & UseHoverOptions &
  Omit<TooltipProps, 'children' | 'anchorRef' | 'onClickOutside'>;

export function HoverTooltip({
  children,
  forceWhen,
  disabled,
  tooltipContent,
  ...tooltipProps
}: HoverTooltipProps) {
  // Trying to get the children ref this way to not force developer to use forwardRef
  const childrenRef = (children as unknown as ObjectWithRef).ref as RefObject<Element>;
  const innerRef = useRef<Element>(null);
  const usedRef = childrenRef || innerRef;
  const [isHover, hoverEvents] = useHover();
  const clonedChildren = cloneElement(children, {
    ref: usedRef,
    ...hoverEvents,
  });

  return (
    <>
      {clonedChildren}
      {!disabled && (forceWhen || isHover) && (
        <Tooltip {...tooltipProps} {...hoverEvents} anchorRef={usedRef}>
          {tooltipContent}
        </Tooltip>
      )}
    </>
  );
}
