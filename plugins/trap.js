let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await Neko.nsfw.trap()).url
   conn.sendFile(m.chat, json, 'trap.jpg', '', m, false)
}
handler.help = ['trap']
handler.tags = ['18']
handler.command = /^trap$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.limit = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler