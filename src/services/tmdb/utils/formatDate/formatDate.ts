export default function formatDate(dateString: string) {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(dateString));
}
