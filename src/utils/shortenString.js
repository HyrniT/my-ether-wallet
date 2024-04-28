function shortenString(string, maxLength = 8) {
  return string.length > maxLength
    ? `${string.substring(0, maxLength)}...`
    : string;
}

export { shortenString };
