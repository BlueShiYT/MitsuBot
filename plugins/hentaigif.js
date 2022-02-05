let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
	if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  try {
  let res = await fetch('https://api.xteam.xyz/randomimage/hentaiguf?APIKEY=Dawnfrostkey')
  let json = await res.json()
  let { 
result
} = json
let stiker = await sticker(null, result, 'Kiss', `${wm}`)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['hentaigif']
handler.tags = ['18']
handler.command = /^hentaigif$/i
handler.premium = true
handler.register = true
handler.private = true

module.exports = handler
let wm = global.botwm
