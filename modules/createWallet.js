const ethers = require("ethers");

async function createWallet() {
  let randomWallet = await ethers.Wallet.createRandom();
  let wallet = {
    privateKey: randomWallet.signingKey.privateKey,
    address: randomWallet.signingKey.address,
  };
  return wallet;
}

module.exports = createWallet;
