import { useEffect, useState } from 'react';

export const useProgress = (planned: number | undefined, elapsed: number) => {
  if (planned === undefined) {
    return { percentage: undefined, remainingTime: undefined };
  }

  const percentage = Math.min(99, Math.round((100 * elapsed) / planned));
  const remainingTime = Math.round(planned - elapsed);

  return { percentage, remainingTime };
};

export const useDelta = (initialValue: number) => {
  const [delta, setDelta] = useState(initialValue);
  const reset = () => setDelta(0);

  useEffect(() => {
    const i = setInterval(() => {
      setDelta((d) => d + 1.0);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return { reset, delta };
};
