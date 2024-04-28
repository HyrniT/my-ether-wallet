function maskString(myString, visibleLength = 6, hiddenLength = 14) {
  const visibleStart = '0x' + myString.substr(0, visibleLength);
  const visibleEnd = myString.substr(-visibleLength);
  const maskedPart = '●'.repeat(hiddenLength);
  return `${visibleStart}${maskedPart}${visibleEnd}`;
}

export { maskString };
