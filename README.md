## Features

- Create Web3 Wallet
- Create and check beautiful address with conditions

## How to use

Clone source code
```sh
git clone https://github.com/mhqb365/create-wallet-ethereum.git
cd create-wallet-ethereum
npm i
```
Create wallet without check beautiful address
```sh
node create x
```
x: number of wallet you wanna create. Example:
```sh
node create 5
```

Create wallet with check beautiful address, set conditions at config.json
```sh
node create x beauty
```

Example:
```sh
node create 5 beauty
```