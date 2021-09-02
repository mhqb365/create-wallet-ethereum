const createWallet = require("./modules/createWallet");
const checkBeauty = require("./modules/checkBeauty");
const fs = require("fs");

const total = Number(process.argv.slice(2)[0]);
let beauty = process.argv.slice(2)[1];
if (beauty) beauty = beauty.trim();

let wallets = [];

async function create(length) {
  if (beauty && beauty == "beauty") {
    console.log("Creat and checking...");
  } else console.log("Creating...");
  for (let i = 0; i < length; i++) {
    let wallet = await createWallet();
    if (beauty && beauty == "beauty") {
      let check = await checkBeauty(wallet.address);
      // console.log(check);
      if (check) wallets.push(wallet);
    } else wallets.push(wallet);
  }
}

create(total).then(async () => {
  // console.log(wallets);
  if (wallets.length > 0) {
    await fs.writeFileSync(
      "./wallets/wallet-" + Number(Date.now() / 1e3).toFixed(0) + ".json",
      JSON.stringify(wallets)
    );
    if (beauty && beauty == "beauty") {
      console.log("Done, found:", wallets.length);
    } else console.log("Done");
  } else console.log("Not found");
});
