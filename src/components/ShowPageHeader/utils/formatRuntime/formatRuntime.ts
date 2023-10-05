export default function formatRuntime(runtime: number) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;

  const hoursSubstring = hours ? `${hours}h` : '';
  const minutesSubstring = minutes ? `${minutes}min` : '';

  return `${hoursSubstring} ${minutesSubstring}`.trim();
}
