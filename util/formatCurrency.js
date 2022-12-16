const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "AUD"
})

export default function formatCurrency(amount) {
  return formatter.format(amount)
}
