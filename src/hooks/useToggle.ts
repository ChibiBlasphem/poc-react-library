import { useCallback, useState } from 'react';

export function useToggle(initialState: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState(initialState);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle];
}
