import { RefObject, useEffect } from 'react';

export function useClickOutside(
  domContext: Element | Document,
  refs: RefObject<Element>[],
  onClickOutside?: () => void
) {
  useEffect(() => {
    if (refs.length < 1) {
      throw 'There should be at least one ref';
    }

    const elements = refs.reduce((els, ref) => {
      return ref.current ? [...els, ref.current] : els;
    }, [] as Element[]);

    const handler = (e: Event) => {
      if (
        onClickOutside &&
        elements.every((element) => element !== e.target && !element.contains(e.target as Node))
      ) {
        onClickOutside();
      }
    };

    domContext.addEventListener('click', handler);
    domContext.addEventListener('touchend', handler);
    return () => {
      domContext.removeEventListener('click', handler);
      domContext.removeEventListener('touchend', handler);
    };
  }, [domContext, refs, onClickOutside]);
}
