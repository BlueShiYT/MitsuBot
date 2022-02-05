let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://api.xteam.xyz/randomimage/ass?APIKEY=HIRO`)
  heum = await res.buffer()
  conn.sendButton(m.chat, heum, 'wangy wangy wangy', 'Next', `${usedPrefix}ass`, m)
}
handler.help = ['ass']
handler.tags = ['18']

handler.command = /^(ass)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.private = true
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler