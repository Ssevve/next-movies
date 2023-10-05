export default function formatRuntime(runtime: number) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;

  return `${hours ? `${hours}h ` : ''}${minutes}min`;
}
