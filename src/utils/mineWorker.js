import { calculateHash } from './calculateHash';

const mineBlock = async (previousHash, pendingTransactions, nonce = 5) => {
  let hash = '';
  let nonceValue = 0;

  while (hash.substring(0, nonce) !== '0'.repeat(nonce)) {
    nonceValue++;
    hash = calculateHash(previousHash, pendingTransactions, nonceValue);
  }

  return { hash, nonce: nonceValue };
};

self.addEventListener('message', async event => {
  const { previousHash, pendingTransactions } = event.data;
  const { hash, nonce } = await mineBlock(previousHash, pendingTransactions);
  self.postMessage({ hash, nonce });
});
