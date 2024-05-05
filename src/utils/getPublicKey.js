import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

function getPublicKey(privateKey) {
  const key = ec.keyFromPrivate(privateKey, 'hex');
  return key.getPublic('hex');
}

export { getPublicKey };
