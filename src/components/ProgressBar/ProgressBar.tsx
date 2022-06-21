import { useEffect } from 'react';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { displaySeconds } from '../../utils/display-seconds';
import { Background, Icon, RemainingTime, Triggerer } from './ProgressBar.styles';
import { useDelta, useProgress } from './hooks';

export interface ProgressBarProps {
  planned?: number;
  elapsed?: number;
  triggerer?: string;
}

const getRemainingText = (remainingTime: number | undefined) => {
  if (remainingTime === undefined) {
    return 'no time estimation available';
  }

  const displayedTime = displaySeconds(remainingTime);
  return `about ${displayedTime} remaining`;
};

export function ProgressBar({
  planned,
  elapsed: initialyElapsed = 0,
  triggerer,
}: ProgressBarProps) {
  const { reset, delta } = useDelta(0);
  const { percentage, remainingTime } = useProgress(planned, initialyElapsed + delta);
  const remainingText = getRemainingText(remainingTime);

  useEffect(() => {
    reset();
  }, [initialyElapsed]);

  return (
    <div role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
      {planned !== undefined && (
        <Background>
          <div
            className="elapsed"
            data-testid="progressbar-elapsed"
            style={{ width: `${percentage}%` }}
          />
        </Background>
      )}
      <RemainingTime>
        <Icon icon={faClock} /> {remainingText}
      </RemainingTime>
      <Triggerer>
        <Icon icon={faUser} /> initiated by {triggerer}
      </Triggerer>
    </div>
  );
}
