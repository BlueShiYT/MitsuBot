let fs = require('fs')
let chalk = require('chalk')
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/EhlGwI1K95N1VnwIrwJ838', 'https://chat.whatsapp.com/CMX7x9xLTV3IHKH7LWuxZU', 'https://chat.whatsapp.com/EHURKHammswAwFozEY5JEN']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6285695601294': { // put your number here
    name: 'Owner•Purwandani',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
   },
  '6285795404882': { // put your number here
    isDev: false,
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6282256115584': { // put your number here
    name: 'Moderator•Dave',
    isDev: false,
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6285725741841': {
    name: 'Moderator•Khayla',
    IsDev: true,
    isCreator: false,
    isReport: false // if true this number will send if user use command /report or /join
  },
  '62856956012944': {
    isReport: true,
    isDev: true,
    isCreator: false
  },
  '6283169716874': {
  name: 'Moderator•Febri',
  isCreator: true,
  isReport: false
  },
  '62895336282144': {
  name: 'Co Owner•The.sad.boy01',
  isReport: true,
  isCreator: true
  },
 
}
global.mods = ['6287874779888', '6288291663748', '6285725741841', '6285795404882', '6281804074866', '62856956012944'] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Satu Untuk Semua'
global.author = 'MitsuhaBotz Is The Best'

global.multiplier = 25 // The higher, The harder levelup

global.botwm = 'Botz Whatsapp'
global.logo = fs.readFileSync('./src/kanna.jpg')
global.yt = 'youtube.com/c/TheBlueShi'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})