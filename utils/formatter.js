const MonthName = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]
export const AmountIDR = (value) =>
  `Rp ${new Intl.NumberFormat().format(value)}`
export const DateLong = (value) => {
  const res = new Date(value)
  return `${res.getDate()} ${
    MonthName[res.getMonth()]
  } ${res.getFullYear()} ${res.getHours()}:${res.getMinutes()}:${res.getSeconds()}`
}
