/**
 * Display seconds as hours, minutes and seconds
 * e.g. displaySeconds(7273.12) = 2h 1m 13s
 *      displaySeconds(73.81) = 1m 14s
 * @param seconds - the number of seconds
 */
export function displaySeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (seconds < 10) {
    seconds = Math.round((seconds % 60) * 10) / 10; // keep 1 decimal
  } else {
    seconds = Math.round(seconds % 60); // no decimal
  }

  let display = '';
  if (hours > 0) {
    display += `${hours}h `;
  }
  if (minutes > 0) {
    display += `${minutes}m `;
  }
  display += `${seconds}s`;

  return display;
}
