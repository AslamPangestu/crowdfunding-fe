export const AmountIDR = (value) =>
  `Rp ${new Intl.NumberFormat().format(value)}`
