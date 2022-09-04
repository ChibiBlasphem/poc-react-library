import type { ReactNode, RefObject } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

const DOMContextContext = createContext<HTMLElement | null>(null);

export interface DOMContextProviderProps {
  children: ReactNode;
  container: RefObject<HTMLElement>;
}

export function DOMContextProvider({ children, container: containerRef }: DOMContextProviderProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(containerRef.current);
  }, [containerRef]);

  return <DOMContextContext.Provider value={container}>{children}</DOMContextContext.Provider>;
}

export function useDOMContext(ref: RefObject<Element>) {
  const context = useContext(DOMContextContext);
  return context ?? ref.current?.ownerDocument ?? document;
}
