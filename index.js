const ethers = require("ethers");
const fs = require("fs");

const total = Number(process.argv.slice(2)[0]);
let wallets = [];

async function createWallet(length) {
  for (let i = 0; i < length; i++) {
    let randomWallet = ethers.Wallet.createRandom();
    let wallet = {
      privateKey: randomWallet.signingKey.privateKey,
      address: randomWallet.signingKey.address,
    };
    wallets.push(wallet);
  }
}

createWallet(total).then(async () => {
  // console.log(wallets);
  await fs.writeFileSync(
    "./wallets/wallet-" + Number(Date.now() / 1e3).toFixed(0) + ".json",
    JSON.stringify(wallets)
  );
  console.log("Done!");
});
