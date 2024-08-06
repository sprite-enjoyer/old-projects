export function formatTime(timeInSeconds: number) {
  if (timeInSeconds < 0) {
    throw new Error("Invalid input: timeInSeconds must be non-negative");
  }

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}
