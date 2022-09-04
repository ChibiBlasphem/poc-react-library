import { RefObject, useEffect } from 'react';

export function usePortalContainer(
  generatedId: string,
  parentContainer: HTMLElement | Document | undefined,
  container: RefObject<HTMLElement> | undefined,
  setContainer: (container: HTMLElement) => void
) {
  useEffect(() => {
    if (!parentContainer) return;

    const parentElement = 'body' in parentContainer ? parentContainer.body : parentContainer;

    let tmpContainer = container
      ? container.current
      : (parentElement.querySelector(`#${generatedId}`) as HTMLElement);
    if (!tmpContainer) {
      tmpContainer = document.createElement('div');
      tmpContainer.id = generatedId;
      parentElement.appendChild(tmpContainer);
    }

    setContainer(tmpContainer);
  }, [generatedId, setContainer, parentContainer, container]);
}
