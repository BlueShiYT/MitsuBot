let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await Neko.nsfw.boobs()).url
   conn.sendFile(m.chat, json, 'boobs.jpg', 'Wangy wangy wangy', m, false)
}
handler.help = ['boobs','oppai', 'milf']
handler.tags = ['18']
handler.command = /^(boobs|oppai|milf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler