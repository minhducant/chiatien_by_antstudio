function formatYen(number: number): string {
  const cleanNumber = String(number).replace(/[^\d]/g, '');
  const groups = cleanNumber
    .split('')
    .reverse()
    .join('')
    .match(/\d{1,3}/g);
  if (!groups) {
    return '¥ 0';
  }
  const formattedNumber = groups.reverse().join('.');
  return `¥ ${formattedNumber}`;
}

function formatVietnamDong(number: number): string {
  const cleanNumber = String(number).replace(/[^\d]/g, '');
  const groups = cleanNumber
    .split('')
    .reverse()
    .join('')
    .match(/\d{1,3}/g);
  if (!groups) {
    return '0 đ';
  }
  const formattedNumber = groups.reverse().join('.');
  return `${formattedNumber} đ`;
}

function formatDollar(number: number) {
  const cleanNumber = String(number).replace(/[^\d.]/g, '');
  const groups = cleanNumber
    .split('.')
    .map(group => group.split('').reverse().join(''))
    .join(',')
    .split('')
    .reverse()
    .join('')
    .match(/(\d{1,3}|,)/g);

  if (!groups) {
    return '$0';
  }
  const formattedNumber = groups.reverse().join('');
  return `$${formattedNumber}`;
}

export {formatYen, formatVietnamDong, formatDollar};
