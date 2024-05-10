import SHA256 from 'crypto-js/sha256';

function calculateHash(...data) {
  return SHA256(JSON.stringify(data)).toString();
}

export { calculateHash };
