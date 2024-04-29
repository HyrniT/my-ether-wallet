const exchangeRate = 0.00032;

function usdToEth(usdAmount, rate = exchangeRate) {
  return parseFloat(parseFloat(usdAmount) * rate);
}

function ethToUsd(ethAmount, rate = exchangeRate) {
  return parseFloat(parseFloat(ethAmount) / rate);
}

export { usdToEth, ethToUsd };
