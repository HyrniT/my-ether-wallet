function formatMoney(amount, currency = 'USD') {
  const roundedAmount = parseFloat(amount).toFixed(2);
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(roundedAmount);
  return formattedAmount;
}

export { formatMoney };
