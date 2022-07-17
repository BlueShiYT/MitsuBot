let fs = require('fs')
let chalk = require('chalk')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let wktu = moment.tz('Asia/Jakarta').format('HH:mm:ss')

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

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
global.mods = ['62856956012944'] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.APIs = { // API Prefix kalo mau nambah silahkan
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  td: 'https://api-toxic-devil.herokuapp.com/api',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com'
}
global.APIKeys = { // APIKey Here kalo mau nambah silahkan
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Satu Untuk Semua' //ganti
global.author = 'Subscribe To BlueShiYT' //ganti

global.multiplier = 25 // The higher, The harder levelup

global.botwm = 'Botz Whatsapp|Subs BlueShiYT' //ganti
global.botdate = `❏ ${wktu}\n❏ ${week} ${date}`
global.logo = fs.readFileSync('./src/kanna.jpg')
global.yt = 'youtube.com/c/TheBlueShi' //kalo gak punya yt biarin anggap aja credit:>

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
