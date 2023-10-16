export default function formatUSDString(value: number) {
  return value === 0
    ? '-'
    : value.toLocaleString('en-US', {
        currency: 'USD',
        style: 'currency',
      });
}
