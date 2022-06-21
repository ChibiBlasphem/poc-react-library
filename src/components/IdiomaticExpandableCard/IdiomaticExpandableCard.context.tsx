import { createContext, PropsWithChildren, ReactNode, useContext, useMemo } from 'react';

export interface CardContextValue {
  setTitle: (node: ReactNode) => void;
  setDetail: (node: ReactNode) => void;
}

const IdiomaticExpandableCardContext = createContext<CardContextValue | undefined>(undefined);

export function IdiomaticExpandableCardProvider({
  setTitle,
  setDetail,
  children,
}: PropsWithChildren<CardContextValue>) {
  const value = useMemo(() => ({ setTitle, setDetail }), [setTitle, setDetail]);
  return (
    <IdiomaticExpandableCardContext.Provider value={value}>
      {children}
    </IdiomaticExpandableCardContext.Provider>
  );
}

export function useTitleSetter() {
  const ctx = useContext(IdiomaticExpandableCardContext);
  if (!ctx) {
    throw new Error('IdiomaticExpandableCard.Title must be used within IdiomaticExpandableCard');
  }
  return ctx.setTitle;
}

export function useDetailSetter() {
  const ctx = useContext(IdiomaticExpandableCardContext);
  if (!ctx) {
    throw new Error('IdiomaticExpandableCard.Detail must be used within IdiomaticExpandableCard');
  }
  return ctx.setDetail;
}
