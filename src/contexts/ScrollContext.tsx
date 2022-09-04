import { createContext, ReactNode, RefObject, useContext, useMemo } from 'react';

interface ScrollContextValue {
  add: (listener: ScrollListener) => () => void;
  remove: (listener: ScrollListener) => void;
}

const ScrollContext = createContext<ScrollContextValue>({
  add(listener) {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  },
  remove(listener) {
    window.removeEventListener('scroll', listener);
  },
});

export type ScrollListener = (e: Event) => void;
export interface ScrollProviderProps<El extends HTMLElement> {
  children: ReactNode;
  targetRef: RefObject<El>;
}

export function ScrollProvider<El extends HTMLElement>({
  children,
  targetRef,
}: ScrollProviderProps<El>) {
  const contextValue = useMemo(() => {
    return {
      add: (listener: ScrollListener) => {
        const target = targetRef.current;
        if (!target) {
          return () => {
            // No event
          };
        }

        target.addEventListener('scroll', listener);
        return () => {
          target.removeEventListener('scroll', listener);
        };
      },
      remove: (listener: ScrollListener) => {
        const target = targetRef.current;
        if (!target) return;

        target.removeEventListener('scroll', listener);
      },
    };
  }, [targetRef]);

  return <ScrollContext.Provider value={contextValue}>{children}</ScrollContext.Provider>;
}

export function useScroll() {
  return useContext(ScrollContext);
}
