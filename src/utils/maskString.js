function maskString(myString, visibleLength = 6, hiddenLength = 14) {
  if (!myString) return '';

  const visibleStart = myString.substr(0, visibleLength);
  const visibleEnd = myString.substr(-visibleLength);
  const maskedPart = '●'.repeat(hiddenLength);
  return `${visibleStart}${maskedPart}${visibleEnd}`;
}

export { maskString };
