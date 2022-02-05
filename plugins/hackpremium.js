let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE._data.users[m.sender].as)
    let _timers = (500000 - __timers)
    let order = global.DATABASE._data.users[m.sender].lastpremhack
    let timers = clockString(_timers) 
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let user = global.DATABASE._data.users[m.sender]
    let buttons = [
{buttonId: '.inv', buttonText: {displayText: 'Inventory'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\nSepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`,
    footerText: wm, 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.DATABASE._data.users[m.sender].lastpremhack > 600000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`
let randomaku6 = `${Math.floor(Math.random() * 3)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 16149)
let rbrb5 = (randomaku5 * 145)
let rbrb6 = (randomaku5 * 999999999)
let rbrb7 = (randomaku5 * 9999999)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`
zero6 = `${rbrb6}`
zero7 = `${rbrb7}`

dimas = `✔️ Mendapatkan Korban Hack!`

dimas2 = `🗃️ Mendapatkan Data-Data Korban!`

dimas3 = `➕Mendapatkan IP Dan Password Bank Korban... `

dimas4 = `*Berhasil* Menghack Bank Korban!`

hsl = `
*—[ Hasil Hack Bank ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} ]—*

 ➕ 💸 Uang = [ ${zero6} ]

 ➕ 💎 Berlian = [ ${zero6} ]

 ➕ ✨ Exp = [ ${zero7} ]

 ➕ 📦 Hack Selesai = +1

🕗 Lihat Cooldown Dengan Ketik *.cd* / *.cooldown*

${wm}
`
global.DATABASE._data.users[m.sender].money += rbrb6
global.DATABASE._data.users[m.sender].diamond += rbrb6
global.DATABASE._data.users[m.sender].exp += rbrb7

setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔍Mencari Korban Hack💻.....')
                     }, 0) 
  user.lastpremhack = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['phack']
handler.tags = ['premium']
handler.command = /^(premcheat|pcheat|premhack|phack)$/i
handler.register = true
handler.premium = true

module.exports = handler
let wm = global.botwm

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}