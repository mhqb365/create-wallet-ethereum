const fs = require('fs')

const condition = fs.readFileSync('./beauty.txt', 'utf-8').split(',\r\n')

// console.log(condition)

async function checkAddress(address) {
  let result = false;
  for (let i = 0; i < condition.length; i++) {
    if (address.slice(-9).search(condition[i].trim()) >= 0) result = true;
  }
  return result;
}

module.exports = checkAddress;
