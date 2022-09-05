import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, SpyInstance, vi } from 'vitest';
import { RangeSlider } from './RangeSlider';

type Box = {
  top?: number;
  left?: number;
  width: number;
  height: number;
};

const noop = () => {};

const moveBy = (element: Element, { from, to }: { from: number; to: number }) => {
  fireEvent.mouseDown(element, {
    buttons: 1,
    clientX: from,
  });
  fireEvent.mouseMove(document, {
    buttons: 1,
    clientX: to,
  });
  fireEvent.mouseUp(document);
};

const touchBy = (element: Element, { from, to }: { from: number; to: number }) => {
  fireEvent.touchStart(element, {
    touches: [{ clientX: from }],
  });
  fireEvent.touchMove(document, {
    touches: [{ clientX: to }],
  });
  fireEvent.touchEnd(document);
};

const events = {
  move: moveBy,
  touch: touchBy,
};

const spyDOMRect = (element: Element, { top = 0, left = 0, width, height }: Box) => {
  return vi.spyOn(element, 'getBoundingClientRect').mockImplementation(() => ({
    top,
    left,
    width,
    height,
    bottom: top + height,
    right: left + width,
    x: left,
    y: top,
    toJSON() {},
  }));
};

describe('RangeSlider', () => {
  let spyInstance: SpyInstance;
  beforeEach(() => {
    spyInstance = spyDOMRect(Element.prototype, { width: 100, height: 20 });
  });

  afterEach(() => {
    spyInstance.mockReset();
  });

  it('should show as many handles as there is values', () => {
    const { getAllByTestId, rerender } = render(
      <RangeSlider values={[0, 50, 100]} min={0} max={100} onChange={noop} />
    );

    let dots = getAllByTestId('RangeSlider.Dot');
    expect(dots.length).toBe(3);
    expect(dots[0].style.left).toBe('0px');
    expect(dots[1].style.left).toBe('50px');
    expect(dots[2].style.left).toBe('100px');

    rerender(<RangeSlider values={[0, 100]} min={0} max={100} onChange={noop} />);
    dots = getAllByTestId('RangeSlider.Dot');
    expect(dots.length).toBe(2);
    expect(dots[0].style.left).toBe('0px');
    expect(dots[1].style.left).toBe('100px');
  });

  describe('with marks', () => {
    it('should not display marks if space between marks is less than 40px', () => {
      const { queryByTestId } = render(
        <RangeSlider showMarks values={[0, 100]} min={0} max={100} step={10} onChange={noop} />
      );

      expect(queryByTestId('RangeSlider.SliderMarks')).toBeNull();
    });

    it('should display as many marks as there is interval count', () => {
      const { getByTestId } = render(
        <RangeSlider showMarks values={[0, 100]} min={0} max={100} step={50} onChange={noop} />
      );

      const sliderMarks = getByTestId('RangeSlider.SliderMarks');
      expect(sliderMarks.childElementCount).toBe(3);

      expect([...sliderMarks.children].map((c) => c.textContent)).toEqual(['0', '50', '100']);
    });
  });

  (['move', 'touch'] as const).forEach((event) => {
    describe(`Should work with "${event}" events`, () => {
      it('Should change value when moving a dot', () => {
        const mockOnChange = vi.fn();
        const { getAllByTestId } = render(
          <RangeSlider values={[0, 100]} min={0} max={100} onChange={mockOnChange} />
        );

        const dots = getAllByTestId('RangeSlider.Dot');

        spyDOMRect(dots[0], { top: -10, left: -10, width: 20, height: 20 });

        events[event](dots[0], { from: 0, to: 50 });
        expect(mockOnChange).toHaveBeenCalledWith([50, 100]);
      });

      it('should always stop one interval before crossing dots around', () => {
        const mockOnChange = vi.fn();
        const { getAllByTestId, rerender } = render(
          <RangeSlider values={[0, 90]} min={0} max={100} onChange={mockOnChange} />
        );

        let dots = getAllByTestId('RangeSlider.Dot');
        spyDOMRect(dots[0], { top: -10, left: -10, width: 20, height: 20 });
        events[event](dots[0], { from: 0, to: 90 });
        expect(mockOnChange).toHaveBeenCalledWith([89, 90]);

        rerender(
          <RangeSlider values={[0, 90]} min={0} max={100} step={10} onChange={mockOnChange} />
        );

        dots = getAllByTestId('RangeSlider.Dot');
        spyDOMRect(dots[0], { top: -10, left: -10, width: 20, height: 20 });
        events[event](dots[0], { from: 0, to: 90 });
        expect(mockOnChange).toHaveBeenCalledWith([80, 90]);
      });

      describe('with interval', () => {
        it('Should change at mid distance to next interval when moving a dot', () => {
          const mockOnChange = vi.fn();
          const { getAllByTestId } = render(
            <RangeSlider values={[0, 100]} min={0} max={100} step={10} onChange={mockOnChange} />
          );

          const dots = getAllByTestId('RangeSlider.Dot');

          spyDOMRect(dots[0], { top: -10, left: -10, width: 20, height: 20 });

          events[event](dots[0], { from: 0, to: 4 });
          expect(mockOnChange).not.toHaveBeenCalled();

          events[event](dots[0], { from: 0, to: 5 });
          expect(mockOnChange).toHaveBeenCalledWith([10, 100]);
        });
      });
    });
  });
});
