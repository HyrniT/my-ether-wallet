function roundNumber(number, decimalPlaces = 6) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round((number + Number.EPSILON) * factor) / factor;
}

export { roundNumber };
