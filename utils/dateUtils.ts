export function getExpirationDateFromNow(monthsFromNow = 0): string {
  const date = new Date();
  date.setMonth(date.getMonth() + monthsFromNow);

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${month}/${year}`;
}