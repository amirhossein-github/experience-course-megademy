// 1. Create Base Object
let mmdWallet = {
  nameOfB: 'M A',
  balanceM: 6000,
  hamsterCount: 4000000000,
  dollarCount: null
}
console.log(mmdWallet, typeof mmdWallet);

// 2. Convert mmdWalet to JSON Stringify
let mmdStringifyWallet = JSON.stringify(mmdWallet)
console.log(mmdStringifyWallet, typeof mmdStringifyWallet);

// 3. Save mmdStringifyWallet to Local storage
localStorage.setItem('BW', mmdStringifyWallet)

// 4. Restore mmdWallet Data from Local Storage
let BW = localStorage.getItem('BW')
console.log(BW, typeof BW);

// 5. Parse 
let BWParsed = JSON.parse(BW)
console.log(BWParsed , typeof BWParsed);

// 6. Change of value 
BWParsed.dollarCount = 10000000

// 7. (2) Convert mmdWalet to JSON Stringify
 mmdStringifyWallet = JSON.stringify(BWParsed)
console.log(mmdStringifyWallet, typeof mmdStringifyWallet);

// 8. (3) Save mmdStringifyWallet to Local storage
localStorage.setItem('BW', mmdStringifyWallet)